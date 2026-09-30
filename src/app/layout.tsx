import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import type { ReactNode } from "react";
import { getSiteOrigin } from "@/lib/metadata";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], display: "swap", variable: "--font-apex" });
const metadataOrigin = getSiteOrigin();
const metadataImage = metadataOrigin ? new URL("/opengraph-image", metadataOrigin).toString() : undefined;

export const metadata: Metadata = {
  metadataBase: getSiteOrigin(),
  title: { default: "Apex AirCare | Aircon Service Concept", template: "%s | Apex AirCare" },
  description: "A fictional portfolio concept for air-conditioning servicing, repair, installation and cleaning in Kuala Lumpur and Klang Valley.",
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "en_MY",
    siteName: "Apex AirCare",
    title: "Apex AirCare | Aircon Service Concept",
    description: "A fictional local-service website concept, created as a portfolio demonstration.",
    ...(metadataImage ? { images: [metadataImage] } : {}),
  },
  twitter: { card: "summary_large_image", title: "Apex AirCare | Aircon Service Concept", ...(metadataImage ? { images: [metadataImage] } : {}) },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en" className={dmSans.variable}><body>{children}</body></html>;
}
