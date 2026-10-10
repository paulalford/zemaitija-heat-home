import { englishHomeContent } from "@/content/en/home";
import { englishNavigationLabels } from "@/content/en/navigation";
import type { SharedSiteContent } from "@/content/shared-content";

export const englishSharedContent = {
  brand: {
    primary: "Žemaitija",
    secondary: "Heat & Home",
  },
  navigation: englishNavigationLabels,
  mobileNavigation: {
    open: "Menu",
    close: "Close",
  },
  footer: {
    businessName: "Žemaitija Heat & Home",
    tagline: "Residential heating and plumbing.",
    serviceArea: "Šiauliai and the wider Žemaitija region of Lithuania.",
    exploreHeading: "Explore",
    servicesHeading: "Services",
    copyright: "© {year} Žemaitija Heat & Home.",
    disclosure:
      "An independently developed commercial-style portfolio case study based on a realistic small-business brief.",
  },
  accessibility: {
    skipToMainContent: "Skip to main content",
    homeLinkLabel: "Žemaitija Heat & Home — home",
    openMainMenu: "Open main menu",
    closeMainMenu: "Close main menu",
    mainNavigation: "Main navigation",
    languageSwitcher: "Language",
  },
  servicePage: {
    serviceCtaEyebrow: "Let’s discuss your home",
    viewAllServicesLabel: "View all services",
  },
  structuredData: {
    description: englishHomeContent.metadata.description,
    areaServed: "Šiauliai and the wider Žemaitija region of Lithuania",
    knowsAbout: [
      "Residential heating installation and repair",
      "Heat pump installation",
      "General plumbing",
      "Boiler and heating maintenance",
      "Emergency repairs",
      "Residential call-outs",
    ],
  },
} as const satisfies SharedSiteContent;
