import Link from "next/link";
import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "Page Not Found", description: "This page is not part of the fictional Apex AirCare portfolio demo." };

export default function NotFound() {
  return (
    <PageShell>
      <section className="page-intro not-found" aria-labelledby="not-found-title">
        <div className="container page-intro-inner">
          <p className="section-kicker">404 · Page not found</p>
          <h1 id="not-found-title">That page isn’t here.</h1>
          <p>The address may be outdated, or the page may have moved. This is a fictional portfolio demo; no service request has been created.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/">Go to the homepage</Link>
            <Link className="button button-secondary" href="/services">Browse service guides</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
