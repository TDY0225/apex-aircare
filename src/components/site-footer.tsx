import Link from "next/link";
import { brand, navigation, serviceAreas } from "@/content/site";
import { services } from "@/content/services";
import { BrandMark, Icon } from "@/components/icon";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-column">
          <Link className="brand-lockup footer-brand" href="/">
            <BrandMark className="brand-mark" />
            <span>{brand.name}</span>
          </Link>
          <p>
            A considered local-service website concept for air-conditioning
            care in Kuala Lumpur and Klang Valley.
          </p>
          <span className="footer-demo-tag"><Icon name="info" /> Fictional portfolio demo</span>
        </div>
        <div className="footer-link-group">
          <h2>Explore</h2>
          {navigation.slice(1, 4).map((item) => <Link key={item.label} href={item.href}>{item.label}</Link>)}
          <Link href="/#process">How it works</Link>
        </div>
        <div className="footer-link-group">
          <h2>Services</h2>
          {services.map((service) => <Link key={service.slug} href={`/services/${service.slug}`}>{service.name}</Link>)}
        </div>
        <div className="footer-link-group footer-areas">
          <h2>Example locations</h2>
          <p>{serviceAreas.slice(0, 4).join(" · ")}</p>
          <Link href="/service-areas">See the illustrative list <Icon name="arrow" /></Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{brand.disclosure}</p>
        <span>© {new Date().getFullYear()} Apex AirCare concept</span>
      </div>
    </footer>
  );
}
