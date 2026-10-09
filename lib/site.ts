export const site = {
  name: "Žemaitija Heat & Home",
  url: "https://zemaitija-heat-home.vercel.app",
  language: "en",
  locale: "en_GB",
  description:
    "Residential heating, heat pump installation, plumbing and emergency repair services around Šiauliai and the wider Žemaitija region. A portfolio case study.",
  serviceArea: "Šiauliai and the wider Žemaitija region of Lithuania",
  disclosure:
    "An independently developed commercial-style portfolio case study based on a realistic small-business brief.",
};

export const serviceCategories = [
  "Residential heating installation and repair",
  "Heat pump installation",
  "General plumbing",
  "Boiler and heating maintenance",
  "Emergency repairs",
  "Residential call-outs",
] as const;

export const navigationLinks = [
  { href: "/", label: "Home", group: "main" },
  { href: "/heating", label: "Heating", group: "services" },
  { href: "/heat-pumps", label: "Heat Pumps", group: "services" },
  { href: "/plumbing", label: "Plumbing", group: "services" },
  { href: "/emergency-repairs", label: "Emergency Repairs", group: "services" },
  { href: "/service-area", label: "Service Area", group: "main" },
  { href: "/about", label: "About", group: "main" },
  { href: "/contact", label: "Contact", group: "main" },
] as const;
