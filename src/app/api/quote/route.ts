import { getLeadProvider } from "@/lib/lead-provider";
import { QUOTE_MAX_BODY_BYTES, QUOTE_MIN_SUBMISSION_MS, validateQuotePayload } from "@/lib/quote";

const demoSuccess = "Demo only: your details were validated locally and were not saved, sent or shared.";

function jsonError(message: string, status: number, fieldErrors?: Record<string, string>) {
  return Response.json({ ok: false, message, fieldErrors }, { status });
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type")?.toLowerCase() ?? "";
  if (!contentType.startsWith("application/json")) {
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

  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return jsonError("The request body could not be read.", 400);
  }

  if (new TextEncoder().encode(rawBody).byteLength > QUOTE_MAX_BODY_BYTES) {
    return jsonError("This request is too large. Shorten the details and try again.", 413);
  }

  let payload: unknown;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return jsonError("The request body was not valid JSON.", 400);
  }

  const validation = validateQuotePayload(payload);
  if (!validation.ok) {
    return jsonError(validation.message, 400, validation.fieldErrors);
  }

  if (validation.value.website || !Number.isFinite(validation.value.startedAt) || Date.now() - validation.value.startedAt < QUOTE_MIN_SUBMISSION_MS) {
    return jsonError("Please wait a moment and try again.", 400);
  }

  try {
    await getLeadProvider().submit(validation.value);
    return Response.json({ ok: true, message: demoSuccess });
  } catch {
    return jsonError("The demo could not complete this request. Please try again.", 500);
  }
}
