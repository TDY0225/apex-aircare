import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { Icon } from "@/components/icon";
import { PageShell } from "@/components/page-shell";
import { getServiceBySlug, services } from "@/content/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service guide" };
  return { title: service.name, description: service.detail };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <PageShell>
      <section className="detail-hero" aria-labelledby="service-title">
        <Container className="detail-hero-grid">
          <div className="detail-hero-copy">
            <Link className="back-link" href="/services"><Icon name="arrow" /> All service guides</Link>
            <p className="section-kicker">Service guide</p>
            <h1 id="service-title">{service.name}</h1>
            <p className="detail-lead">{service.detail}</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contact#quote">Request a Quote <Icon name="arrow" /></Link>
              <Link className="button button-secondary" href="/service-areas">Check example areas</Link>
            </div>
            <p className="demo-notice"><Icon name="info" /> Fictional portfolio content. No real service request is created.</p>
          </div>
          <div className="detail-photo-wrap">
            <Image src={service.image} alt={service.imageAlt} fill priority sizes="(max-width: 760px) 100vw, 50vw" className="detail-photo" />
            <span className="photo-caption">Illustrative service photography</span>
          </div>
        </Container>
      </section>
      <section className="route-section detail-section" aria-labelledby="situations-title">
        <Container className="detail-content-grid">
          <div>
            <p className="section-kicker">When it may be relevant</p>
            <h2 id="situations-title">Start with what you have noticed.</h2>
            <ul className="detail-list">{service.situations.map((item) => <li key={item}><Icon name="check" />{item}</li>)}</ul>
          </div>
          <div className="detail-scope-card">
            <p className="section-kicker">What the conversation may cover</p>
            <ul className="detail-list">{service.scope.map((item) => <li key={item}><Icon name="arrow" />{item}</li>)}</ul>
          </div>
        </Container>
      </section>
      <section className="faq-section" aria-labelledby="faq-title">
        <Container className="faq-grid">
          <div>
            <p className="section-kicker">Before you continue</p>
            <h2 id="faq-title">Useful answers without overpromising.</h2>
            <p>Real service scope, suitability and pricing would depend on the unit and site. This page helps visitors frame a better enquiry.</p>
          </div>
          <div className="faq-list">
            {service.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
