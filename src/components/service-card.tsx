import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icon";
import type { Service } from "@/content/services";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <article className="service-card">
      <Link className="service-image-link" href={`/services/${service.slug}`} aria-label={`View ${service.name} details`}>
        <div className="service-image-wrap">
          <Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 285px" className="service-image" />
        </div>
        <span className="service-number">0{index + 1}</span>
      </Link>
      <div className="service-card-body">
        <h3>{service.name}</h3>
        <p>{service.description}</p>
        <Link className="text-link" href={`/services/${service.slug}`}>
          Explore this service <Icon name="arrow" />
        </Link>
      </div>
    </article>
  );
}
