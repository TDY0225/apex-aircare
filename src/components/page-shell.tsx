import type { ReactNode } from "react";
import { getWhatsAppHref } from "@/lib/whatsapp";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader whatsappHref={getWhatsAppHref()} />
      <main className="page-main" id="main-content">{children}</main>
      <SiteFooter />
    </>
  );
}

export function PageIntro({ kicker, title, description }: { kicker: string; title: string; description: string }) {
  return (
    <section className="page-intro" aria-labelledby="page-title">
      <div className="container page-intro-inner">
        <p className="section-kicker">{kicker}</p>
        <h1 id="page-title">{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
