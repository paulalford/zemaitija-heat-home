import {
  HeatPumpsPage,
  type HeatPumpsPageContent,
} from "@/components/heat-pumps-page";
import { englishHeatingContent } from "@/content/en/pages/heating";
import { englishHomeContent } from "@/content/en/home";
import { englishNavigationLabels } from "@/content/en/navigation";
import { createLocalizedPageMetadata } from "@/lib/metadata";

export const englishHeatPumpsContent = {
  metadata: {
    title: "Heat Pump Installation in Šiauliai",
    description:
      "Explore heat pump suitability, assessment and installation for homes around Šiauliai and the wider Žemaitija region. A portfolio case study.",
  },
  hero: {
    eyebrow: "Heat pump installation · Šiauliai & Žemaitija",
    title: "Heat pump installation starts with understanding your home.",
    description:
      "Considering a change to your heating? Explore whether a heat pump may suit your home in Šiauliai or the wider Žemaitija region, and discuss an assessment before deciding.",
    contactLabel: "Discuss a heat pump for your home",
  },
  consideration: {
    eyebrow: "When to consider a heat pump",
    title: "A heating decision worth exploring at the right time.",
    description:
      "These situations can be a useful starting point for a discussion. They do not establish suitability on their own; the recommendation depends on your home and the work involved.",
    items: [
      {
        title: "Replacing an ageing heating system",
        description:
          "A planned replacement is a chance to compare heating approaches and understand what a heat pump installation would involve.",
      },
      {
        title: "Renovating your home",
        description:
          "Discuss heating alongside insulation and layout changes, so any recommendation takes account of the home you are planning.",
      },
      {
        title: "Planning lower-temperature heating",
        description:
          "If you are considering underfloor heating or changes to radiators, review whether a heat pump could work with the proposed setup.",
      },
      {
        title: "Improving heating controls",
        description:
          "A controls review can be part of a wider heating plan. Discuss whether adjustments to your current system or a new approach would suit your needs.",
      },
      {
        title: "Considering a different heating approach",
        description:
          "You can explore the options before deciding to replace anything. Start with how your home is heated and what you would like to change.",
      },
    ],
  },
  suitability: {
    eyebrow: "Suitability factors",
    title: "Look at the whole home before choosing a system.",
    description:
      "A heat pump recommendation should account for your property’s heating needs, existing setup and future plans. These are the main factors to discuss during an assessment.",
    factors: [
      {
        title: "Current heating system",
        description:
          "The equipment, its condition and existing connections help establish what might be retained and what would need to change.",
      },
      {
        title: "Building insulation",
        description:
          "How well your home retains heat matters. Existing insulation and any planned improvements should be considered together.",
      },
      {
        title: "Heat demand",
        description:
          "The heating your property needs should be assessed before recommending equipment, rather than choosing a system from floor area alone.",
      },
      {
        title: "Radiators or underfloor heating",
        description:
          "Your existing heat emitters need to be reviewed for the proposed heating setup. Some may be retained; others may need changes.",
      },
      {
        title: "Available outdoor space",
        description:
          "An outdoor unit needs a suitable location, with space for access and consideration of nearby windows, boundaries and neighbouring homes.",
      },
      {
        title: "Property layout",
        description:
          "Room arrangements, pipework routes and indoor space for any hot-water equipment can affect the work an installation would involve.",
      },
      {
        title: "Renovation plans",
        description:
          "Extensions, insulation work or room changes may affect the recommendation and the order in which heating work should be carried out.",
      },
    ],
  },
  assessment: {
    eyebrow: "Before a recommendation",
    title: "What an assessment should cover.",
    description:
      "An assessment brings together practical details about the property and the proposed installation. Share what you know at the enquiry stage; the site visit helps clarify the rest.",
    details: [
      {
        title: "Property size and layout",
        description: "The rooms to be heated, their use and any planned changes.",
      },
      {
        title: "Existing heating equipment",
        description: "The current heat source, controls and known issues.",
      },
      {
        title: "Current heat emitters",
        description:
          "The radiators or underfloor heating serving each part of the home.",
      },
      {
        title: "Insulation condition",
        description: "What is known about the roof, walls, floors and windows.",
      },
      {
        title: "Hot-water requirements",
        description:
          "Household needs, existing storage and available indoor space.",
      },
      {
        title: "Outdoor-unit location",
        description:
          "Possible positions, access and routes for connections to the home.",
      },
    ],
    enquiryInformation: {
      title: "Useful information before you enquire",
      description:
        "Have your address, approximate floor area, heating equipment details and renovation plans ready. Photos of the current system and possible outdoor location can help the initial discussion. You do not need to have every answer to get in touch.",
    },
    installation: {
      title: "What installation may involve",
      description:
        "Depending on the recommendation, work may include positioning an outdoor unit, connecting it to the heating and hot-water system, and adapting pipework, emitters or controls. The proposal should also cover system checks, setup and a handover to explain the controls.",
    },
  },
  process: {
    eyebrow: "Our process",
    title: "From your first question to an informed decision.",
    description:
      "The enquiry starts a discussion, with suitability reviewed before an installation is recommended. Take time to understand the proposed work and quotation before agreeing the next steps.",
    steps: [
      {
        title: "Enquiry",
        description:
          "Share your property’s location, current heating and what you are considering.",
      },
      {
        title: "Initial discussion",
        description:
          "Talk through your needs and renovation plans, identify useful information and discuss whether a site assessment is the next step.",
      },
      {
        title: "Site assessment",
        description:
          "Review the property, heating setup, hot-water needs and possible equipment locations before making a recommendation.",
      },
      {
        title: "Recommendation / quotation",
        description:
          "Discuss whether a heat pump may suit the home. If an installation is recommended, review the proposed work, any supporting changes and the quotation.",
      },
      {
        title: "Next steps",
        description:
          "Ask questions about the proposal, then agree the scope and timing if you decide to proceed. If a heat pump is unsuitable, discuss other heating options.",
      },
    ],
  },
  serviceArea: {
    eyebrow: englishHomeContent.hero.area.eyebrow,
    title: "Heat pump enquiries around Šiauliai.",
    description:
      "We serve homes in Šiauliai and the wider Žemaitija region, with an approximately 50 km service radius.",
    noteTitle: "Start with your property’s location",
    noteDescription:
      "Include your town or village when you enquire so we can confirm coverage and discuss arrangements for a site assessment.",
    linkLabel: englishHomeContent.region.link.label,
  },
  relatedServices: {
    eyebrow: englishHeatingContent.relatedServices.eyebrow,
    title: "Support for the rest of your heating and plumbing.",
    items: [
      {
        title: englishNavigationLabels.heating,
        description:
          "Review installation, repairs, maintenance and upgrades if you need help with your current system or want to explore other heating work.",
        path: "/heating",
        linkLabel: "Explore heating services",
      },
      {
        title: englishNavigationLabels.plumbing,
        description:
          "Planning work elsewhere in the home? Explore domestic plumbing services for everyday needs and renovation projects.",
        path: "/plumbing",
        linkLabel: englishHomeContent.services.items[2].link.label,
      },
      {
        title: englishNavigationLabels.emergencyRepairs,
        description:
          "If your existing heating or plumbing needs urgent attention, read the emergency repair information before planning an upgrade.",
        path: "/emergency-repairs",
        linkLabel: englishHomeContent.enquiry.emergencyLink.label,
      },
    ],
  },
  finalCta: {
    title: "Could a heat pump suit your home?",
    description:
      "Tell us about your property, existing heating and plans. Start a discussion about suitability, what an assessment should cover and the next steps for your home.",
    contactLabel: "Discuss heat pump suitability",
  },
} as const satisfies HeatPumpsPageContent;

export const metadata = createLocalizedPageMetadata({
  title: englishHeatPumpsContent.metadata.title,
  description: englishHeatPumpsContent.metadata.description,
  path: "/heat-pumps",
  locale: "en",
});

export default function EnglishHeatPumpsPage() {
  return <HeatPumpsPage content={englishHeatPumpsContent} locale="en" />;
}
