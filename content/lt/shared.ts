import { lithuanianHomeContent } from "@/content/lt/home";
import { lithuanianNavigationLabels } from "@/content/lt/navigation";
import type { SharedSiteContent } from "@/content/shared-content";

export const lithuanianSharedContent = {
  brand: {
    primary: "Žemaitija",
    secondary: "Heat & Home",
  },
  navigation: lithuanianNavigationLabels,
  mobileNavigation: {
    open: "Meniu",
    close: "Uždaryti",
  },
  footer: {
    businessName: "Žemaitija Heat & Home",
    tagline: "Gyvenamųjų namų šildymas ir santechnika.",
    serviceArea: "Šiauliai ir platesnis Žemaitijos regionas Lietuvoje.",
    exploreHeading: "Informacija",
    servicesHeading: "Paslaugos",
    copyright: "© {year} Žemaitija Heat & Home.",
    disclosure:
      "Nepriklausomai sukurtas komercinio stiliaus demonstracinis projektas, paremtas realistiška smulkiojo verslo užduotimi.",
  },
  accessibility: {
    skipToMainContent: "Pereiti prie pagrindinio turinio",
    homeLinkLabel: "Žemaitija Heat & Home — pradžia",
    openMainMenu: "Atidaryti pagrindinį meniu",
    closeMainMenu: "Uždaryti pagrindinį meniu",
    mainNavigation: "Pagrindinė navigacija",
    languageSwitcher: "Kalba",
  },
  servicePage: {
    serviceCtaEyebrow: "Aptarkime jūsų namus",
    viewAllServicesLabel: "Peržiūrėti visas paslaugas",
  },
  structuredData: {
    description: lithuanianHomeContent.metadata.description,
    areaServed: "Šiauliai ir platesnis Žemaitijos regionas Lietuvoje",
    knowsAbout: [
      "Gyvenamųjų namų šildymo sistemų montavimas ir remontas",
      "Šilumos siurblių montavimas",
      "Bendrieji santechnikos darbai",
      "Katilų ir šildymo sistemų priežiūra",
      "Skubus remontas",
      "Iškvietimai į namus",
    ],
  },
} as const satisfies SharedSiteContent;
