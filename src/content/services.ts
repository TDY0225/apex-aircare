export type Service = {
  slug: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "aircon-servicing",
    name: "Aircon Servicing",
    description:
      "A practical starting point for routine cleaning and an initial look at your unit.",
    image: "/images/hero-indoor-technician.jpg",
    imageAlt: "Illustrative technician checking indoor air-conditioning equipment",
  },
  {
    slug: "repair-troubleshooting",
    name: "Repair & Troubleshooting",
    description:
      "Describe unusual sounds, weak airflow or other symptoms to guide the next conversation.",
    image: "/images/aircon-cleaning.jpg",
    imageAlt: "Illustrative close-up of a technician inspecting an outdoor air-conditioning unit",
  },
  {
    slug: "new-installation",
    name: "New Installation",
    description:
      "Explore installation considerations for a home, office or small commercial space.",
    image: "/images/aircon-interior.jpg",
    imageAlt: "Illustrative wall-mounted air-conditioning unit in a bright interior",
  },
  {
    slug: "chemical-cleaning",
    name: "Chemical Cleaning",
    description:
      "Learn when a deeper clean may be worth discussing based on the unit’s condition.",
    image: "/images/aircon-servicing.jpg",
    imageAlt: "Illustrative technician checking an outdoor air-conditioning unit",
  },
];
