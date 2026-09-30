import { Container } from "@/components/container";
import { AreaIllustration } from "@/components/area-illustration";
import { Icon } from "@/components/icon";
import { PageIntro, PageShell } from "@/components/page-shell";
import { serviceAreas } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("Service Areas", "Explore the illustrative Kuala Lumpur and Klang Valley locations used in the fictional Apex AirCare portfolio concept.", "/service-areas");

export default function ServiceAreasPage() {
  return (
    <PageShell>
      <PageIntro kicker="Illustrative service areas" title="A local concept for Kuala Lumpur and Klang Valley." description="These locations shape the information architecture for the portfolio demo. They are examples, not a claim of current operational coverage." />
      <section className="route-section areas-detail-section" aria-labelledby="areas-list-title">
        <Container className="areas-detail-grid">
          <div>
            <p className="section-kicker">Example locations</p>
            <h2 id="areas-list-title">Start with the area you want to ask about.</h2>
            <p className="route-copy">A real service business would verify its coverage and travel boundaries before publishing them. This demo keeps the list deliberately small and transparent.</p>
            <ul className="area-detail-list">{serviceAreas.map((area) => <li key={area}><Icon name="pin" />{area}</li>)}</ul>
            <p className="demo-notice"><Icon name="info" /> No real appointment, dispatch or coverage lookup is connected.</p>
          </div>
          <div className="areas-detail-visual"><AreaIllustration /><span className="area-map-label">KLANG VALLEY</span><span className="map-caption">Illustrative diagram · not to scale</span></div>
        </Container>
      </section>
    </PageShell>
  );
}
