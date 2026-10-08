export const site = {
  name: "Žemaitija Heat & Home",
  description:
    "Residential heating, heat pump installation and plumbing around Šiauliai and the wider Žemaitija region of Lithuania. A fictional business developed as a portfolio case study.",
  serviceArea: "Šiauliai and the wider Žemaitija region of Lithuania",
  disclosure:
    "An independently developed commercial-style portfolio case study based on a realistic small-business brief.",
};

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
