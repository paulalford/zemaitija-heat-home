import {
  legacyContentLocale,
  localeConfig,
} from "@/lib/i18n";

export const site = {
  name: "Žemaitija Heat & Home",
  url: "https://zemaitija-heat-home.vercel.app",
  language: localeConfig[legacyContentLocale].htmlLanguage,
  locale: localeConfig[legacyContentLocale].openGraphLocale,
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
