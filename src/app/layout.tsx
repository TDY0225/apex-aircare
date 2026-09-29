import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], display: "swap", variable: "--font-apex" });

function getMetadataBase(): URL | undefined {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) return undefined;
  try { return new URL(siteUrl); } catch { return undefined; }
}

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: { default: "Apex AirCare | Aircon Service Concept", template: "%s | Apex AirCare" },
  description: "A fictional portfolio concept for air-conditioning servicing, repair, installation and cleaning in Kuala Lumpur and Klang Valley.",
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "en_MY",
    siteName: "Apex AirCare",
    title: "Apex AirCare | Aircon Service Concept",
    description: "A fictional local-service website concept, created as a portfolio demonstration.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en" className={dmSans.variable}><body>{children}</body></html>;
}
