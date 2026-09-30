export const brand = {
  name: "Apex AirCare",
  region: "Kuala Lumpur & Klang Valley",
  disclosure:
    "Apex AirCare is a fictional business created as a portfolio demonstration.",
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact", href: "/contact" },
] as const;

export const serviceAreas = [
  "Kuala Lumpur",
  "Petaling Jaya",
  "Subang Jaya",
  "Shah Alam",
  "Cheras",
  "Puchong",
  "Kajang",
] as const;

export const serviceTypes = [
  "Aircon Servicing",
  "Repair & Troubleshooting",
  "New Installation",
  "Chemical Cleaning / Chemical Wash",
] as const;

export const demoContact = {
  whatsappMessage: "Hello, I would like to ask about air-conditioning service.",
  noContactConfigured: "WhatsApp is not configured for this portfolio demo.",
} as const;
