"use client";

import Link from "next/link";

export default function ErrorPage({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <main className="container app-error" id="main-content" aria-labelledby="app-error-title">
        <p className="section-kicker">Apex AirCare portfolio demo</p>
        <h1 id="app-error-title">This page could not be displayed.</h1>
        <p>Please try loading this page again, or return to the homepage.</p>
        <div className="hero-actions">
          <button className="button button-primary" onClick={() => retry()} type="button">Try again</button>
          <Link className="button button-secondary" href="/">Go to the homepage</Link>
        </div>
      </main>
    </>
  );
}
