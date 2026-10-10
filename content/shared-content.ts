export type NavigationLabels = Readonly<{
  home: string;
  heating: string;
  heatPumps: string;
  plumbing: string;
  emergencyRepairs: string;
  serviceArea: string;
  about: string;
  contact: string;
}>;

export type SharedSiteContent = Readonly<{
  brand: Readonly<{
    primary: string;
    secondary: string;
  }>;
  navigation: NavigationLabels;
  mobileNavigation: Readonly<{
    open: string;
    close: string;
  }>;
  footer: Readonly<{
    businessName: string;
    tagline: string;
    serviceArea: string;
    exploreHeading: string;
    servicesHeading: string;
    copyright: string;
    disclosure: string;
  }>;
  accessibility: Readonly<{
    skipToMainContent: string;
    homeLinkLabel: string;
    openMainMenu: string;
    closeMainMenu: string;
    mainNavigation: string;
    languageSwitcher: string;
  }>;
  servicePage: Readonly<{
    serviceCtaEyebrow: string;
    viewAllServicesLabel: string;
  }>;
  structuredData: Readonly<{
    description: string;
    areaServed: string;
    knowsAbout: readonly string[];
  }>;
}>;
