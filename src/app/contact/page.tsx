import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Icon } from "@/components/icon";
import { PageIntro, PageShell } from "@/components/page-shell";
import { QuoteForm } from "@/components/quote-form";
import { getWhatsAppHref } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact",
  description: "Preview a truthful quote request and contact experience for the fictional Apex AirCare local-service concept.",
};

export default function ContactPage() {
  const whatsappHref = getWhatsAppHref();
  return (
    <PageShell>
      <PageIntro kicker="Contact concept" title="Choose a clear next step." description="Use the quote form to preview validation and safe demo feedback. A real business could activate a configured WhatsApp path later." />
      <section className="route-section contact-section" id="quote" aria-labelledby="contact-title">
        <Container className="contact-grid">
          <div className="contact-copy">
            <p className="section-kicker">Start an enquiry</p>
            <h2 id="contact-title">Tell us what you need.</h2>
            <p>Choose a service and share a short description. The demo validates the request at a server boundary, then clearly confirms that nothing was saved or sent.</p>
            <div className="contact-options">
              <Link className="contact-option" href="/services"><Icon name="arrow" /><span><strong>Explore services</strong><small>Compare the four service guides.</small></span></Link>
              <Link className="contact-option" href="/service-areas"><Icon name="pin" /><span><strong>Review example areas</strong><small>See the illustrative Klang Valley list.</small></span></Link>
              {whatsappHref ? <a className="contact-option" href={whatsappHref} target="_blank" rel="noreferrer"><Icon name="message" /><span><strong>Open configured WhatsApp</strong><small>Uses a destination supplied outside source code.</small></span></a> : <div className="contact-option"><Icon name="info" /><span><strong>WhatsApp is not configured</strong><small>No outbound conversation is opened by this demo.</small></span></div>}
            </div>
          </div>
          <QuoteForm />
        </Container>
      </section>
    </PageShell>
  );
}
