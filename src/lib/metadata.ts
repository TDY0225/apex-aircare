import type { Metadata } from "next";

export function getSiteOrigin(): URL | undefined {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  const candidate = configured || (vercelHost ? `https://${vercelHost}` : undefined);
  if (!candidate) return undefined;
  try {
    const url = new URL(candidate);
    if (url.username || url.password || url.pathname !== "/" || url.search || url.hash) return undefined;
    return url.protocol === "https:" || url.hostname === "localhost" ? url : undefined;
  } catch {
    return undefined;
  }
}

export function createPageMetadata(title: string, description: string, pathname: string): Metadata {
  const origin = getSiteOrigin();
  const image = origin ? new URL("/opengraph-image", origin).toString() : undefined;
  return {
    title,
    description,
    ...(origin ? { alternates: { canonical: new URL(pathname, origin) } } : {}),
    openGraph: { type: "website", locale: "en_MY", siteName: "Apex AirCare", title: `${title} | Apex AirCare`, description, ...(image ? { images: [image] } : {}) },
    twitter: { card: "summary_large_image", title: `${title} | Apex AirCare`, description, ...(image ? { images: [image] } : {}) },
  };
}
