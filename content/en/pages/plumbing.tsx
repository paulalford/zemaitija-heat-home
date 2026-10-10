import {
  PlumbingPage,
  type PlumbingPageContent,
} from "@/components/plumbing-page";
import { englishHomeContent } from "@/content/en/home";
import { englishNavigationLabels } from "@/content/en/navigation";
import { englishHeatingContent } from "@/content/en/pages/heating";
import { createLocalizedPageMetadata } from "@/lib/metadata";

export const englishPlumbingContent = {
  metadata: {
    title: "Residential Plumbing Services in Šiauliai",
    description:
      "Explore domestic plumbing repairs and planned plumbing work for homes around Šiauliai and the wider Žemaitija region. A portfolio case study.",
  },
  hero: {
    eyebrow: "Domestic plumbing · Šiauliai & Žemaitija",
    title: "Practical plumbing help for your home.",
    description:
      "From a leaking tap to plumbing changes for a renovation, discuss domestic plumbing work in Šiauliai and the wider Žemaitija region.",
    contactLabel: "Discuss your plumbing job",
    emergencyLabel: "Emergency repair information",
  },
  services: {
    eyebrow: "Plumbing services",
    title: "Everyday repairs and planned changes.",
    description:
      "Help with general domestic plumbing around the home, from individual fixtures to pipework changes connected with a renovation or heating project.",
    groups: [
      {
        title: "Repairs and fixtures",
        description:
          "Practical help with everyday plumbing problems and household fixtures.",
        services: [
          {
            title: "Leaking taps and pipework",
            description:
              "Assess visible leaks and discuss the repair needed for accessible domestic pipework or taps.",
          },
          {
            title: "Tap replacement",
            description:
              "Replace kitchen, bathroom or utility-room taps and check the connected pipework.",
          },
          {
            title: "Sinks and basins",
            description:
              "Help with installation, replacement and repairs for household sinks and basins.",
          },
          {
            title: "Toilets and cisterns",
            description:
              "Assess problems with domestic toilets and cisterns, or discuss replacement work.",
          },
        ],
      },
      {
        title: "Alterations and planned work",
        description:
          "Plumbing changes for renovations, new layouts and related heating projects.",
        services: [
          {
            title: "Pipework alterations",
            description:
              "Discuss changes to domestic water pipework when moving fixtures or changing a room layout.",
          },
          {
            title: "Plumbing for renovations",
            description:
              "Plan plumbing work alongside bathroom, kitchen or wider property improvements.",
          },
          {
            title: "Heating-related plumbing",
            description:
              "Coordinate domestic pipework changes that form part of heating-system work.",
          },
          {
            title: "General plumbing repairs",
            description:
              "Get help with other domestic plumbing work and establish what needs attention.",
          },
        ],
      },
    ],
  },
  reasonsToCall: {
    eyebrow: "Common reasons to call",
    title: "Tell us what you can see and what has changed.",
    description:
      "You do not need to identify the cause before getting in touch. Describe the problem, the affected fixture or room, and when you first noticed it.",
    items: [
      "A visible leak from a tap, fixture or accessible pipework.",
      "A tap that continues to drip or needs replacing.",
      "Water flow that has changed or is causing concern.",
      "A toilet or cistern that is not working as expected.",
      "Pipework that is damaged or needs altering.",
      "Plumbing changes as part of a renovation.",
      "New fixtures or a different room layout.",
    ],
    urgentNote: {
      title: "Does the work feel urgent?",
      description:
        "If an active plumbing or heating problem needs prompt attention, see the Emergency Repairs page for the information to provide when contacting us. Availability and next steps depend on the situation and location.",
      linkLabel: englishHomeContent.enquiry.emergencyLink.label,
    },
  },
  plannedWork: {
    eyebrow: "Planned plumbing work",
    title: "Plumbing is part of planning a better space.",
    description:
      "Early discussion can help connect fixture choices and room layouts with the pipework changes needed for a renovation or refurbishment.",
    items: [
      {
        title: "Bathroom renovation",
        description:
          "Plan pipework and fixture changes around the proposed layout.",
      },
      {
        title: "Kitchen changes",
        description:
          "Discuss sink, tap and water-supply work for a new arrangement.",
      },
      {
        title: "Relocating fixtures",
        description:
          "Review the pipework changes involved before work begins.",
      },
      {
        title: "Property refurbishment",
        description:
          "Coordinate several domestic plumbing tasks as rooms are updated.",
      },
      {
        title: "Heating pipework changes",
        description:
          "Plan related plumbing alongside heating installation or upgrades.",
      },
    ],
  },
  process: {
    eyebrow: englishHeatingContent.process.eyebrow,
    title: "A straightforward route from enquiry to next steps.",
    description:
      "Start with the job and your location. An assessment can then establish the work involved before you decide how to proceed.",
    steps: [
      {
        title: englishHomeContent.process.steps[0].title,
        description:
          "Tell us where the property is and whether you need a repair or planned plumbing work.",
      },
      {
        title: "Describe the job",
        description:
          "Explain what has happened or what you want to change. Photos and fixture details may help the initial discussion.",
      },
      {
        title: "Assessment / site visit",
        description:
          "Arrange an assessment where needed to inspect the plumbing and understand the work involved.",
      },
      {
        title: englishHomeContent.process.steps[3].title,
        description:
          "Review the proposed work and quotation, then discuss timing and how to proceed.",
      },
    ],
  },
  serviceArea: {
    eyebrow: englishHomeContent.hero.area.eyebrow,
    title: "Domestic plumbing around Šiauliai.",
    description:
      "We serve homes in Šiauliai and the wider Žemaitija region, with an approximately 50 km service radius.",
    noteTitle: "Include your location when you contact us",
    noteDescription:
      "Tell us the town or village and describe the plumbing job so we can confirm coverage and discuss whether a site visit is needed.",
    linkLabel: englishHomeContent.region.link.label,
  },
  relatedServices: {
    eyebrow: englishHeatingContent.relatedServices.eyebrow,
    title: "Heating and urgent help for your home.",
    items: [
      {
        title: englishNavigationLabels.heating,
        description:
          "Explore heating installation, repairs, maintenance and upgrades for your home.",
        path: "/heating",
        linkLabel: englishHomeContent.services.items[0].link.label,
      },
      {
        title: englishNavigationLabels.heatPumps,
        description:
          "Considering a new heating approach? Learn what a heat pump assessment should cover.",
        path: "/heat-pumps",
        linkLabel:
          englishHeatingContent.relatedServices.items[0].linkLabel,
      },
      {
        title: englishNavigationLabels.emergencyRepairs,
        description:
          "If a plumbing or heating problem needs urgent attention, review the emergency repair information.",
        path: "/emergency-repairs",
        linkLabel: englishHomeContent.enquiry.emergencyLink.label,
      },
    ],
  },
  finalCta: {
    title: "What plumbing work does your home need?",
    description:
      "Tell us where the property is, what needs repairing or what you plan to change. We can discuss the job, whether an assessment is needed and the next steps.",
    contactLabel: "Describe your plumbing job",
  },
} as const satisfies PlumbingPageContent;

export const metadata = createLocalizedPageMetadata({
  title: englishPlumbingContent.metadata.title,
  description: englishPlumbingContent.metadata.description,
  path: "/plumbing",
  locale: "en",
});

export default function EnglishPlumbingPage() {
  return <PlumbingPage content={englishPlumbingContent} locale="en" />;
}
