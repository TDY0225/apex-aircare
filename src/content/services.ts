export type Service = {
  slug: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  detail: string;
  situations: readonly string[];
  scope: readonly string[];
  faqs: readonly { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "aircon-servicing",
    name: "Aircon Servicing",
    description:
      "A practical starting point for routine cleaning and an initial look at your unit.",
    image: "/images/hero-indoor-technician.jpg",
    imageAlt: "Illustrative technician checking indoor air-conditioning equipment",
    detail:
      "Routine servicing is a useful starting point when a unit needs a clearer look at its condition or regular care.",
    situations: [
      "The unit has not had a recent service review.",
      "Airflow or cooling feels less consistent than usual.",
      "You want to understand what routine care may involve.",
    ],
    scope: [
      "Discuss the unit, symptoms and recent maintenance history.",
      "Review the visible condition and explain possible next steps.",
      "Clarify what would need checking before any work is agreed.",
    ],
    faqs: [
      { question: "Is servicing the same as a repair?", answer: "No. Servicing is a routine care conversation. A repair may need separate diagnosis after the symptoms and unit condition are understood." },
      { question: "Can I get a fixed price from this page?", answer: "No. This is a fictional demo, and any real quotation would depend on the unit and site details." },
    ],
  },
  {
    slug: "repair-troubleshooting",
    name: "Repair & Troubleshooting",
    description:
      "Describe unusual sounds, weak airflow or other symptoms to guide the next conversation.",
    image: "/images/aircon-cleaning.jpg",
    imageAlt: "Illustrative close-up of a technician inspecting an outdoor air-conditioning unit",
    detail:
      "Troubleshooting starts with the symptoms you have noticed. The purpose is to frame a useful conversation without promising a diagnosis before inspection.",
    situations: [
      "The unit is making an unusual sound.",
      "Cooling, airflow or controls are behaving differently.",
      "You want to describe a problem before deciding on a visit.",
    ],
    scope: [
      "Capture the symptoms, timing and any changes you have observed.",
      "Discuss information that may help a technician understand the context.",
      "Explain which checks or next steps may still be needed.",
    ],
    faqs: [
      { question: "Can this page diagnose my unit?", answer: "No. It provides a safe way to describe a problem. Diagnosis depends on the actual unit and an appropriate inspection." },
      { question: "Should I keep using a unit that behaves unusually?", answer: "If you notice a safety concern, burning smell or other urgent risk, stop using the unit and seek qualified local help. This demo does not provide repair instructions." },
    ],
  },
  {
    slug: "new-installation",
    name: "New Installation",
    description:
      "Explore installation considerations for a home, office or small commercial space.",
    image: "/images/aircon-interior.jpg",
    imageAlt: "Illustrative wall-mounted air-conditioning unit in a bright interior",
    detail:
      "Installation planning is about fit, room context and practical requirements. A real quotation would follow a site-specific conversation.",
    situations: [
      "You are planning air-conditioning for a home or small business.",
      "An existing unit may need replacement or relocation.",
      "You want to understand which details affect an installation discussion.",
    ],
    scope: [
      "Discuss room use, existing equipment and the intended space.",
      "Identify site details that could affect suitability and scope.",
      "Set expectations for a follow-up assessment before any quotation.",
    ],
    faqs: [
      { question: "Are installation packages or prices shown here?", answer: "No. The portfolio demo does not publish invented packages or prices. A real proposal would depend on the site." },
      { question: "Can I choose a unit from this page?", answer: "No. Product selection requires verified technical and site information that this demo does not collect." },
    ],
  },
  {
    slug: "chemical-cleaning",
    name: "Chemical Cleaning",
    description:
      "Learn when a deeper clean may be worth discussing based on the unit’s condition.",
    image: "/images/aircon-servicing.jpg",
    imageAlt: "Illustrative technician checking an outdoor air-conditioning unit",
    detail:
      "Chemical cleaning can be considered when a unit needs a deeper conversation about its condition. Suitability should be assessed rather than assumed.",
    situations: [
      "Routine cleaning may not describe the condition you have noticed.",
      "There is visible build-up or a persistent maintenance concern.",
      "You want to ask what a deeper cleaning discussion could involve.",
    ],
    scope: [
      "Discuss the unit history and the reason a deeper clean is being considered.",
      "Explain that suitability depends on the unit's actual condition.",
      "Clarify what can and cannot be decided before inspection.",
    ],
    faqs: [
      { question: "Does chemical cleaning guarantee better cooling?", answer: "No. This demo makes no guaranteed performance claim. Any outcome depends on the unit and its condition." },
      { question: "Is chemical cleaning always necessary?", answer: "No. It is one possible service conversation, not a default recommendation for every unit." },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
