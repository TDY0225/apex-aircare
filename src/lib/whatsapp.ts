import { demoContact } from "@/content/site";

export function getWhatsAppHref(): string | null {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");
  if (!number || number.length < 8) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(demoContact.whatsappMessage)}`;
}
