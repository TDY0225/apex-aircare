import { getLeadProvider } from "@/lib/lead-provider";
import { QUOTE_MAX_BODY_BYTES, validateQuotePayload } from "@/lib/quote";
import { isQuoteSubmissionTimeValid } from "@/lib/quote-timing.mjs";

const demoSuccess = "Demo only: your details were sent to this application for validation. They were not retained or forwarded to a lead system.";

function jsonError(message: string, status: number, fieldErrors?: Record<string, string>) {
  return Response.json({ ok: false, message, fieldErrors }, { status, headers: { "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" } });
}

async function readBoundedBody(request: Request): Promise<{ body?: string; status?: number }> {
  if (!request.body) return { body: "" };
  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let byteLength = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      byteLength += value.byteLength;
      if (byteLength > QUOTE_MAX_BODY_BYTES) {
        await reader.cancel();
        return { status: 413 };
      }
      chunks.push(value);
    }
  } catch {
    return { status: 400 };
  }
  const bytes = new Uint8Array(byteLength);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  try {
    return { body: new TextDecoder("utf-8", { fatal: true }).decode(bytes) };
  } catch {
    return { status: 400 };
  }
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type")?.split(";", 1)[0].trim().toLowerCase() ?? "";
  if (contentType !== "application/json") {
    return jsonError("This demo accepts JSON form submissions only.", 415);
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > QUOTE_MAX_BODY_BYTES) {
    return jsonError("This request is too large. Shorten the details and try again.", 413);
  }

  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return jsonError("This request could not be verified.", 403);
  }

  const readResult = await readBoundedBody(request);
  if (readResult.status === 413) return jsonError("This request is too large. Shorten the details and try again.", 413);
  if (readResult.status || readResult.body === undefined) return jsonError("The request body could not be read as valid UTF-8.", 400);

  let payload: unknown;
  try {
    payload = JSON.parse(readResult.body);
  } catch {
    return jsonError("The request body was not valid JSON.", 400);
  }

  const validation = validateQuotePayload(payload);
  if (!validation.ok) {
    return jsonError(validation.message, 400, validation.fieldErrors);
  }

  if (validation.value.website || !isQuoteSubmissionTimeValid(validation.value.startedAt, Date.now())) {
    return jsonError("Please wait a moment and try again.", 400);
  }

  try {
    await getLeadProvider().submit(validation.value);
    return Response.json({ ok: true, message: demoSuccess }, { headers: { "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" } });
  } catch {
    return jsonError("The demo could not complete this request. Please try again.", 500);
  }
}
