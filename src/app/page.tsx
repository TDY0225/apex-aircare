import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { Icon } from "@/components/icon";
import { AreaIllustration } from "@/components/area-illustration";
import { LinkButton } from "@/components/link-button";
import { QuoteForm } from "@/components/quote-form";
import { ServiceCard } from "@/components/service-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { serviceAreas } from "@/content/site";
import { services } from "@/content/services";
import { getWhatsAppHref } from "@/lib/whatsapp";

export default function Home() {
  const whatsappHref = getWhatsAppHref();

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader whatsappHref={whatsappHref} />
      <main id="main-content">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <Container className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="eyebrow-dot" aria-hidden="true" />
                A fictional service concept for Kuala Lumpur &amp; Klang Valley
              </p>
                <h1 id="hero-title" tabIndex={-1}>
                Cooler Homes.
                <br />
                <span>Happier Days.</span>
              </h1>
              <p className="hero-description">
                Air-conditioning servicing, repair, installation and cleaning
                for homes and small businesses. Explore a clear, considered
                service experience created as a portfolio demonstration.
              </p>
              <div className="hero-actions">
                <LinkButton href="/contact#quote" icon="arrow">
                  Request a Quote
                </LinkButton>
                <LinkButton href="/services" variant="secondary">
                  Explore Services
                </LinkButton>
              </div>
              <ul className="principle-list" aria-label="Service principles">
                <li>
                  <Icon name="check" />
                  <span>Clear scope</span>
                </li>
                <li>
                  <Icon name="check" />
                  <span>Careful service</span>
                </li>
                <li>
                  <Icon name="check" />
                  <span>Straightforward next steps</span>
                </li>
              </ul>
            </div>
            <div className="hero-visual">
              <div className="hero-photo-wrap">
                <Image
                  src="/images/hero-indoor-technician.jpg"
                  alt="Illustrative photograph of a technician checking air-conditioning equipment indoors"
                  fill
                  priority
                  sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 610px"
                  className="hero-photo"
                />
                <span className="photo-caption">
                  Illustrative service photography
                </span>
              </div>
              <div className="hero-note">
                <span className="hero-note-icon">
                  <Icon name="snow" />
                </span>
                <div>
                  <strong>Comfort starts with a clear plan.</strong>
                  <p>Understand the service before choosing a next step.</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="services-section section-pad" id="services" aria-labelledby="services-title">
          <Container>
            <div className="section-heading-row">
              <div className="section-heading">
                <p className="section-kicker">Our services</p>
                <h2 id="services-title" tabIndex={-1}>The right care for your aircon.</h2>
                <p>
                  Start with what you have noticed. These service guides make it
                  easier to understand what to ask about.
                </p>
              </div>
              <span className="section-side-note">Homes · Offices · Small business</span>
            </div>
            <div className="service-grid">
              {services.map((service, index) => <ServiceCard key={service.slug} service={service} index={index} />)}
            </div>
          </Container>
        </section>

        <section className="approach-section" id="about" aria-labelledby="approach-title">
          <Container className="approach-grid">
            <div className="approach-photo-wrap">
              <Image
                src="/images/aircon-servicing.jpg"
                alt="Illustrative close-up of a technician working on an air-conditioning unit"
                fill
                sizes="(max-width: 800px) 100vw, 48vw"
                className="approach-photo"
              />
              <span className="image-stamp">A service-first concept</span>
            </div>
            <div className="approach-copy">
              <p className="section-kicker">The Apex approach</p>
              <h2 id="approach-title" tabIndex={-1}>More clarity at every step.</h2>
              <p className="approach-lead">
                Apex AirCare is a fictional brand concept built around a simple
                idea: good service begins with useful information and a
                straightforward conversation.
              </p>
              <ul className="approach-points">
                <li>
                  <span className="approach-icon"><Icon name="message" /></span>
                  <div><strong>Explain the scope</strong><p>Make the service options easier to understand.</p></div>
                </li>
                <li>
                  <span className="approach-icon"><Icon name="home" /></span>
                  <div><strong>Respect the space</strong><p>Show care for the home or workplace in the service plan.</p></div>
                </li>
                <li>
                  <span className="approach-icon"><Icon name="arrow" /></span>
                  <div><strong>Keep next steps simple</strong><p>Help visitors know what information to share.</p></div>
                </li>
              </ul>
              <Link className="text-link approach-link" href="/#process">
                How the process works <Icon name="arrow" />
              </Link>
            </div>
          </Container>
        </section>

        <section className="areas-section section-pad" id="areas" aria-labelledby="areas-title">
          <Container className="areas-grid">
            <div className="areas-copy">
              <p className="section-kicker section-kicker-light">Illustrative service areas</p>
              <h2 id="areas-title" tabIndex={-1}>A local concept for Kuala Lumpur &amp; Klang Valley.</h2>
              <p>
                The locations below are examples used to shape this portfolio
                concept. They are not a statement of real-world availability or
                current business coverage.
              </p>
              <ul className="area-list">
                {serviceAreas.map((area) => (
                  <li key={area}><Icon name="pin" />{area}</li>
                ))}
              </ul>
              <Link className="areas-link" href="/service-areas">
                Ask about an area <Icon name="arrow" />
              </Link>
            </div>
            <div className="areas-visual" aria-hidden="true">
              <AreaIllustration />
              <span className="area-map-label">KLANG VALLEY</span>
              <span className="map-caption">Illustrative diagram · not to scale</span>
            </div>
          </Container>
        </section>

        <section className="process-section section-pad" id="process" aria-labelledby="process-title">
          <Container>
            <div className="section-heading process-heading">
              <p className="section-kicker">What to expect</p>
              <h2 id="process-title" tabIndex={-1}>A simple way to get started.</h2>
              <p>
                This process preview replaces sample testimonials with useful,
                honest guidance. It describes the intended experience of the
                fictional concept, not a live service operation.
              </p>
            </div>
            <ol className="process-grid">
              <li className="process-step">
                <span className="step-number">01</span>
                <h3>Share what you noticed</h3>
                <p>Choose a service type and describe the air-conditioning issue or plan.</p>
              </li>
              <li className="process-step">
                <span className="step-number">02</span>
                <h3>Clarify the service scope</h3>
                <p>Discuss what may be needed before deciding on a visit or next step.</p>
              </li>
              <li className="process-step">
                <span className="step-number">03</span>
                <h3>Review the way forward</h3>
                <p>Understand the proposed work and any details that still need checking.</p>
              </li>
            </ol>
          </Container>
        </section>

        <section className="quote-section section-pad" id="quote" aria-labelledby="quote-title">
          <Container className="quote-grid">
            <div className="quote-copy">
              <p className="section-kicker">Contact concept</p>
              <h2 id="quote-title" tabIndex={-1}>Get a clearer starting point.</h2>
              <p>
                Use the form to preview a complete quote flow. This fictional
                demo validates the request on the server boundary, but it does
                not send or save the information entered here.
              </p>
              <div className="demo-contact-card">
                <span className="demo-contact-icon"><Icon name="message" /></span>
                <div>
                  <strong>WhatsApp is not configured</strong>
                  <p>No number is connected in this portfolio demo.</p>
                </div>
              </div>
              <p className="demo-notice">
                <Icon name="info" />
                Portfolio demonstration only. No real enquiries are received.
              </p>
            </div>
            <QuoteForm />
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
