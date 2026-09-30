import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageIntro, PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Privacy",
  description: "A concise explanation of what the fictional Apex AirCare quote demo does and does not retain or send.",
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageIntro kicker="Privacy for this demo" title="What happens to the details you enter." description="This page describes the current portfolio-demo behavior. It is not a legal policy for an operating service company." />
      <section className="route-section privacy-section" aria-labelledby="privacy-title">
        <Container className="privacy-layout">
          <div className="section-heading"><p className="section-kicker">Current behavior</p><h2 id="privacy-title">No lead system is connected.</h2><p>The quote form sends a validation request to this local application boundary only. The demo provider does not save, log, email, share or forward the submitted values.</p></div>
          <div className="privacy-list"><h3>What the demo does</h3><ul><li>Checks the request shape and required fields on the server.</li><li>Rejects malformed, oversized or obvious automated submissions.</li><li>Returns a clear success or recoverable error message.</li></ul><h3>What it does not do</h3><ul><li>Create a customer record or database entry.</li><li>Send a real technician, email, WhatsApp message or CRM lead.</li><li>Claim legal compliance, retention schedules or operating-company status.</li></ul></div>
        </Container>
      </section>
    </PageShell>
  );
}
