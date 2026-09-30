import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { createServer } from "node:net";
import { request as httpRequest } from "node:http";
import { after, before, describe, it } from "node:test";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { isQuoteSubmissionTimeValid, QUOTE_MIN_SUBMISSION_MS } from "../src/lib/quote-timing.mjs";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
let serverProcess;
let baseUrl;

async function reservePort() {
  const listener = createServer();
  listener.listen(0, "127.0.0.1");
  await once(listener, "listening");
  const { port } = listener.address();
  await new Promise((done, fail) => listener.close((error) => error ? fail(error) : done()));
  return port;
}

async function waitForServer(url) {
  const deadline = Date.now() + 90_000;
  while (Date.now() < deadline) {
    if (serverProcess.exitCode !== null) throw new Error(`Next.js test server exited with ${serverProcess.exitCode}`);
    try {
      await fetch(url);
      return;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 300));
    }
  }
  throw new Error("Next.js test server did not become ready within 90 seconds");
}

function payload(overrides = {}) {
  return {
    name: "Synthetic Test User",
    phone: "0123456789",
    service: "Aircon Servicing",
    message: "Synthetic regression test only",
    website: "",
    startedAt: Date.now() - 1_000,
    ...overrides,
  };
}

async function post(body, headers = { "Content-Type": "application/json" }) {
  return fetch(`${baseUrl}/api/quote`, { method: "POST", headers, body });
}

function postChunked(body) {
  return new Promise((resolve, reject) => {
    const target = new URL("/api/quote", baseUrl);
    const req = httpRequest({ hostname: target.hostname, port: target.port, path: target.pathname, method: "POST", headers: { "Content-Type": "application/json" } }, (res) => {
      const chunks = [];
      res.on("data", (chunk) => chunks.push(chunk));
      res.on("end", () => resolve({ status: res.statusCode, headers: res.headers, body: Buffer.concat(chunks).toString("utf8") }));
    });
    req.on("error", reject);
    for (let index = 0; index < body.length; index += 1_000) req.write(body.slice(index, index + 1_000));
    req.end();
  });
}

before(async () => {
  const port = await reservePort();
  baseUrl = `http://127.0.0.1:${port}`;
  serverProcess = spawn(process.execPath, [resolve(root, "node_modules/next/dist/bin/next"), "dev", "--hostname", "127.0.0.1", "--port", String(port)], {
    cwd: root,
    stdio: "ignore",
    windowsHide: true,
  });
  await waitForServer(baseUrl);
});

after(async () => {
  if (serverProcess && serverProcess.exitCode === null) {
    serverProcess.kill();
    await Promise.race([once(serverProcess, "exit"), new Promise((resolve) => setTimeout(resolve, 5_000))]);
  }
});

describe("quote API regression boundary", () => {
  it("accepts a valid synthetic demo request without echoing its details", async () => {
    const input = payload();
    const response = await post(JSON.stringify(input));
    const body = await response.json();
    assert.equal(response.status, 200);
    assert.equal(body.ok, true);
    assert.match(body.message, /sent to this application for validation/i);
    assert.doesNotMatch(JSON.stringify(body), /Synthetic Test User|0123456789|Synthetic regression test only/);
    assert.equal(response.headers.get("cache-control"), "no-store");
  });

  it("rejects invalid fields", async () => {
    const response = await post(JSON.stringify(payload({ phone: "", service: "unknown" })));
    assert.equal(response.status, 400);
    assert.equal((await response.json()).ok, false);
  });

  it("rejects a non-JSON media type, including JSONP", async () => {
    for (const type of ["text/plain", "application/jsonp"]) {
      const response = await post("{}", { "Content-Type": type });
      assert.equal(response.status, 415);
    }
    assert.equal((await post("{}", { "Content-Type": "application/json; charset=utf-8" })).status, 400);
  });

  it("rejects malformed JSON", async () => {
    assert.equal((await post("{bad json")).status, 400);
  });

  it("rejects a foreign Origin", async () => {
    const response = await fetch(`${baseUrl}/api/quote`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Origin: "https://outside.example" },
      body: JSON.stringify(payload()),
    });
    assert.equal(response.status, 403);
  });

  it("rejects the honeypot field", async () => {
    assert.equal((await post(JSON.stringify(payload({ website: "filled" })))).status, 400);
  });

  it("rejects an oversized chunked body without relying on Content-Length", async () => {
    const response = await postChunked(JSON.stringify(payload({ message: "x".repeat(9_000) })));
    assert.equal(response.status, 413);
  });

  it("rejects too-fast and future submissions deterministically", async () => {
    const now = 1_000_000;
    assert.equal(isQuoteSubmissionTimeValid(now - (QUOTE_MIN_SUBMISSION_MS - 1), now), false);
    assert.equal(isQuoteSubmissionTimeValid(now - QUOTE_MIN_SUBMISSION_MS, now), true);
    assert.equal(isQuoteSubmissionTimeValid(now + 1, now), false);
    assert.equal(isQuoteSubmissionTimeValid(Number.NaN, now), false);
    assert.equal((await post(JSON.stringify(payload({ startedAt: Date.now() + 60_000 })))).status, 400);
  });
});
