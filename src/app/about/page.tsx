import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Icon } from "@/components/icon";
import { PageIntro, PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "About the Concept",
  description: "Learn about the fictional Apex AirCare service philosophy and the portfolio-demo boundaries behind the experience.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageIntro kicker="About the concept" title="A service experience built around clarity." description="Apex AirCare is a fictional portfolio concept for a Kuala Lumpur and Klang Valley local-service business. Its story is a service philosophy, not a fabricated company history." />
      <section className="route-section" aria-labelledby="about-principles-title">
        <Container className="principles-layout">
          <div className="section-heading">
            <p className="section-kicker">The Apex approach</p>
            <h2 id="about-principles-title">Useful information should come before a sales promise.</h2>
            <p>The experience is designed to help a visitor understand the service question, choose a sensible next step and share only the details needed for an initial conversation.</p>
          </div>
          <div className="principles-stack">
            <article><span className="approach-icon"><Icon name="message" /></span><div><h3>Explain the scope</h3><p>Service guides use plain language and avoid diagnosing a unit before it is assessed.</p></div></article>
            <article><span className="approach-icon"><Icon name="home" /></span><div><h3>Respect the setting</h3><p>Home, office and small-business contexts are acknowledged without inventing coverage or operational proof.</p></div></article>
            <article><span className="approach-icon"><Icon name="arrow" /></span><div><h3>Keep next steps simple</h3><p>A quote request, service guide, area overview and optional configured WhatsApp path stay easy to find.</p></div></article>
          </div>
        </Container>
      </section>
      <section className="truth-section" aria-labelledby="truth-title">
        <Container className="truth-grid">
          <div><p className="section-kicker section-kicker-light">Portfolio boundary</p><h2 id="truth-title">This is a fictional demo.</h2></div>
          <p>Apex AirCare does not claim real technicians, reviews, credentials, response times, prices, opening hours, coverage or customer records. The quote flow validates data for demonstration and does not save or send it.</p>
        </Container>
      </section>
    </PageShell>
  );
}
