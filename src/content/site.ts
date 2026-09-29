export const brand = {
  name: "Apex AirCare",
  region: "Kuala Lumpur & Klang Valley",
  disclosure:
    "Apex AirCare is a fictional business created as a portfolio demonstration.",
} as const;

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Service Areas", href: "#areas" },
  { label: "Contact", href: "#quote" },
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
