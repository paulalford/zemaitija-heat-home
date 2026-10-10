import type { HomePageContent } from "@/content/home-content";

export const englishHomeContent = {
  metadata: {
    title: "Heating, Heat Pumps & Plumbing in Šiauliai",
    description:
      "Residential heating, heat pump installation, plumbing and emergency repair services around Šiauliai and the wider Žemaitija region. A portfolio case study.",
    socialImageAlt:
      "Žemaitija Heat & Home — heating, heat pumps and plumbing around Šiauliai",
    socialImageHeadline:
      "Heating, heat pumps and plumbing for your home.",
    socialImageRegion: "Šiauliai & the wider Žemaitija region",
    socialImageServices: "Heating · Heat Pumps · Plumbing · Repairs",
    socialImageDisclosure: "Portfolio case study",
  },
  hero: {
    eyebrow: "Žemaitija Heat & Home",
    heading: "Heating and plumbing for homes around Šiauliai.",
    description:
      "Heating repairs, new installations, heat pumps and everyday plumbing for residential properties.",
    contactLabel: "Contact us about your job",
    servicesLabel: "Explore our services",
    image: {
      src: "/images/boiler_room_maintenance_in_progress.png",
      alt: "Technician servicing a residential heating system in a utility room",
    },
    area: {
      eyebrow: "Our service area",
      title: "Šiauliai & Žemaitija",
      description:
        "Residential call-outs in Šiauliai and the surrounding towns and villages, with an approximately 50 km service radius.",
      link: {
        path: "/service-area",
        label: "Check your location",
      },
    },
  },
  services: {
    eyebrow: "Our services",
    heading: "Help with heating, plumbing and urgent repairs.",
    introduction: "Choose the service that matches your job.",
    items: [
      {
        title: "Heating",
        description:
          "Heating system installation, repairs and upgrades, plus boiler and heating maintenance.",
        link: {
          path: "/heating",
          label: "View heating services",
        },
        image: {
          src: "/images/tidy_boiler_room_with_copper_pipework.png",
          alt: "Residential heating system with boiler and copper pipework",
          className: "service-card-image-heating",
        },
      },
      {
        title: "Heat Pumps",
        description:
          "Heat pump installation for homeowners considering a change to their heating system.",
        link: {
          path: "/heat-pumps",
          label: "Explore heat pumps",
        },
        image: {
          src: "/images/ChatGPT%20Image%20Oct%208%2C%202026%2C%2008_56_29%20PM-3.png",
          alt: "Outdoor air-source heat pump beside a detached home",
        },
      },
      {
        title: "Plumbing",
        description:
          "General domestic plumbing and residential call-outs for work around the home.",
        link: {
          path: "/plumbing",
          label: "View plumbing services",
        },
        image: {
          src: "/images/ChatGPT%20Image%20Oct%208%2C%202026%2C%2008_56_30%20PM-4.png",
          alt: "Plumber repairing pipework beneath a kitchen sink",
          className: "service-card-image-plumbing",
        },
      },
      {
        title: "Emergency Repairs",
        description:
          "Urgent heating and plumbing repairs when something at home needs attention.",
        link: {
          path: "/emergency-repairs",
          label: "Emergency repair details",
        },
        image: {
          src: "/images/emergency-repair-heating-system.png",
          alt: "Technician repairing a residential heating system",
          className: "service-card-image-emergency",
        },
      },
    ],
  },
  heatPumps: {
    eyebrow: "Heat pump installation",
    heading: "Considering a different way to heat your home?",
    description:
      "If you are renovating or planning a heating upgrade, heat pump installation is an option to discuss. Start by looking at the property, your plans and the work an installation would involve.",
    link: {
      path: "/heat-pumps",
      label: "Learn about heat pump installation",
    },
    noteHeading: "Start with your home",
    noteDescription:
      "A heating upgrade is a chance to review your current system and consider what suits the property. Discuss suitability and the installation process before deciding on a new system.",
    enquiryPrompt:
      "Tell us about the home, its existing heating and any renovation plans when you enquire.",
  },
  whyChoose: {
    eyebrow: "A local residential focus",
    heading: "Why choose Žemaitija Heat & Home?",
    description:
      "Heating and plumbing support for homes in the region, from maintenance and repairs to planned installation work.",
    link: {
      path: "/about",
      label: "About the company",
    },
    reasons: [
      {
        title: "A focus on homes",
        description:
          "Residential services for homeowners, landlords and people renovating properties.",
      },
      {
        title: "Clear local coverage",
        description:
          "Based around Šiauliai and the wider Žemaitija region, with an approximately 50 km service radius.",
      },
      {
        title: "Straightforward communication",
        description:
          "Start with what needs doing. Discuss the job, an assessment and the next steps before making a decision.",
      },
      {
        title: "Practical service scope",
        description:
          "Heating installation, repair and maintenance alongside heat pumps and general plumbing.",
      },
    ],
  },
  process: {
    eyebrow: "How to get started",
    heading: "From your first enquiry to the next steps.",
    steps: [
      {
        title: "Contact",
        description:
          "Tell us where the property is and what heating or plumbing work you need.",
      },
      {
        title: "Discuss the job",
        description:
          "Talk through the problem or planned work and the details needed to assess it.",
      },
      {
        title: "Site visit / assessment",
        description:
          "Arrange a visit where needed to look at the property and understand the work involved.",
      },
      {
        title: "Quotation / next steps",
        description:
          "Review the proposed work and quotation, then discuss how to proceed.",
      },
    ],
  },
  region: {
    eyebrow: "Working in the region",
    heading: "Šiauliai and the wider Žemaitija region.",
    description:
      "Residential heating and plumbing for Šiauliai and surrounding towns and villages, with an approximately 50 km service radius.",
    image: {
      src: "/images/ChatGPT%20Image%20Oct%208%2C%202026%2C%2008_56_31%20PM-5.png",
      alt: "Rural home and countryside landscape",
    },
    noteHeading: "Check coverage for your property",
    noteDescription:
      "Include your location when you contact us so coverage can be confirmed for the job. This also helps plan a visit or assessment.",
    link: {
      path: "/service-area",
      label: "View the service area",
    },
  },
  enquiry: {
    eyebrow: "Let’s discuss the work",
    heading: "What does your home need?",
    description:
      "Tell us about the property, your location and the heating or plumbing job. Start with an enquiry and discuss the next steps.",
    contactLink: {
      path: "/contact",
      label: "Contact Žemaitija Heat & Home",
    },
    urgentPrompt: "Something needs urgent attention?",
    emergencyLink: {
      path: "/emergency-repairs",
      label: "View emergency repair information",
    },
  },
} as const satisfies HomePageContent;
