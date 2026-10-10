import type { PublicPagePath } from "@/lib/i18n";

type HomeImage = Readonly<{
  src: string;
  alt: string;
  className?: string;
}>;

type HomeLink = Readonly<{
  path: PublicPagePath;
  label: string;
}>;

export type HomePageContent = Readonly<{
  metadata: Readonly<{
    title: string;
    description: string;
    socialImageAlt: string;
    socialImageHeadline: string;
    socialImageRegion: string;
    socialImageServices: string;
    socialImageDisclosure: string;
  }>;
  hero: Readonly<{
    eyebrow: string;
    heading: string;
    description: string;
    contactLabel: string;
    servicesLabel: string;
    image: HomeImage;
    area: Readonly<{
      eyebrow: string;
      title: string;
      description: string;
      link: HomeLink;
    }>;
  }>;
  services: Readonly<{
    eyebrow: string;
    heading: string;
    introduction: string;
    items: readonly Readonly<{
      title: string;
      description: string;
      link: HomeLink;
      image: HomeImage;
    }>[];
  }>;
  heatPumps: Readonly<{
    eyebrow: string;
    heading: string;
    description: string;
    link: HomeLink;
    noteHeading: string;
    noteDescription: string;
    enquiryPrompt: string;
  }>;
  whyChoose: Readonly<{
    eyebrow: string;
    heading: string;
    description: string;
    link: HomeLink;
    reasons: readonly Readonly<{
      title: string;
      description: string;
    }>[];
  }>;
  process: Readonly<{
    eyebrow: string;
    heading: string;
    steps: readonly Readonly<{
      title: string;
      description: string;
    }>[];
  }>;
  region: Readonly<{
    eyebrow: string;
    heading: string;
    description: string;
    image: HomeImage;
    noteHeading: string;
    noteDescription: string;
    link: HomeLink;
  }>;
  enquiry: Readonly<{
    eyebrow: string;
    heading: string;
    description: string;
    contactLink: HomeLink;
    urgentPrompt: string;
    emergencyLink: HomeLink;
  }>;
}>;
