import { serviceTypes } from "@/content/site";

export const QUOTE_MAX_BODY_BYTES = 8_000;
export type QuoteInput = {
  name: string;
  phone: string;
  service: string;
  message: string;
  website: string;
  startedAt: number;
};

export type QuoteFieldErrors = Partial<Record<"name" | "phone" | "service" | "message", string>>;

export type QuoteValidation =
  | { ok: true; value: QuoteInput }
  | { ok: false; fieldErrors: QuoteFieldErrors; message: string };

function asText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function validateQuotePayload(payload: unknown): QuoteValidation {
  if (!payload || typeof payload !== "object") {
    return { ok: false, fieldErrors: {}, message: "Please review the form and try again." };
  }

  const data = payload as Record<string, unknown>;
  const name = asText(data.name);
  const phone = asText(data.phone);
  const service = asText(data.service);
  const message = asText(data.message);
  const website = asText(data.website);
  const startedAt = typeof data.startedAt === "number" ? data.startedAt : Number(data.startedAt);
  const fieldErrors: QuoteFieldErrors = {};

  if (name.length > 80) fieldErrors.name = "Keep your name under 80 characters.";
  if (!phone) fieldErrors.phone = "Enter a phone number so the demo can show the quote flow.";
  else if (!/^[+\d][\d\s().-]{6,31}$/.test(phone)) fieldErrors.phone = "Enter a phone number using numbers and common separators.";
  if (!serviceTypes.includes(service as (typeof serviceTypes)[number])) fieldErrors.service = "Choose a service type.";
  if (message.length > 1_000) fieldErrors.message = "Keep the service details under 1,000 characters.";

  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, fieldErrors, message: "Please correct the highlighted fields." };
  }

  return { ok: true, value: { name, phone, service, message, website, startedAt } };
}
