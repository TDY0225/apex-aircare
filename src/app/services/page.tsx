import { Container } from "@/components/container";
import { PageIntro, PageShell } from "@/components/page-shell";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/content/services";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("Aircon Services", "Explore the fictional Apex AirCare service guides for servicing, troubleshooting, installation and deeper cleaning conversations.", "/services");

export default function ServicesPage() {
  return (
    <PageShell>
      <PageIntro
        kicker="Service guides"
        title="Start with the service question you have."
        description="Each guide explains what the conversation may cover, what information helps, and what still needs checking before a real quotation."
      />
      <section className="route-section" aria-labelledby="services-list-title">
        <Container>
          <div className="section-heading route-heading">
            <p className="section-kicker">Four useful starting points</p>
            <h2 id="services-list-title">Clearer service discovery for homes and small businesses.</h2>
            <p>This fictional portfolio demo avoids invented prices, guarantees and credentials. Choose a guide to see genuinely different scope and next-step information.</p>
          </div>
          <div className="service-grid route-service-grid">
            {services.map((service, index) => <ServiceCard key={service.slug} service={service} index={index} />)}
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
