import {
  EmergencyRepairsPage,
  type EmergencyRepairsPageContent,
} from "@/components/emergency-repairs-page";
import { englishHomeContent } from "@/content/en/home";
import { englishNavigationLabels } from "@/content/en/navigation";
import { englishHeatingContent } from "@/content/en/pages/heating";
import { createLocalizedPageMetadata } from "@/lib/metadata";

export const englishEmergencyRepairsContent = {
  metadata: {
    title: "Emergency Heating & Plumbing Repairs in Šiauliai",
    description:
      "Guidance for urgent residential heating and plumbing repair enquiries around Šiauliai and the wider Žemaitija region. A portfolio case study.",
  },
  hero: {
    eyebrow: "Urgent repairs · Šiauliai & Žemaitija",
    title: "Urgent heating or plumbing problem at home?",
    description:
      "Tell us what has happened and where the property is. We handle urgent repair enquiries around Šiauliai and the wider Žemaitija region.",
    contactLabel: "Contact us about an urgent repair",
    imageAlt: englishHomeContent.services.items[3].image.alt,
    beforeContact: {
      title: "Before you contact us",
      preparation:
        "Have your location, a brief description of the problem and your contact details ready. Say clearly if water is actively leaking or the heating has stopped completely.",
      coverage:
        "Normal coverage is approximately 50 km around Šiauliai, across the wider Žemaitija region.",
    },
  },
  urgentProblems: {
    eyebrow: "Problems that may need urgent attention",
    title: "Describe what is happening without trying to diagnose it.",
    description:
      "These examples may warrant prompt assessment. The information you provide helps establish the appropriate next step; it does not mean every problem can be repaired immediately.",
    items: [
      "An active water leak from accessible pipework or a household fixture.",
      "Burst or visibly damaged domestic pipework.",
      "A complete loss of heating that cannot reasonably wait for planned maintenance.",
      "Water leaking from a heating-system component.",
      "A significant plumbing fault affecting normal use of the home.",
      "Unexpected water appearing where it should not be.",
      "Another heating-system problem that appears to need prompt assessment.",
    ],
  },
  contactInformation: {
    eyebrow: "What to tell us",
    title: "Useful details help us understand the situation quickly.",
    description:
      "Share what you know and avoid entering an unsafe area to collect more information. You do not need to identify the cause yourself.",
    items: [
      {
        title: "Property location",
        description:
          "Provide the town or village and address details needed to identify where help is required.",
      },
      {
        title: "What has happened",
        description:
          "Describe what you can see or hear and which room, fixture or heating component is affected.",
      },
      {
        title: "When it started",
        description:
          "Explain when you first noticed the problem and whether it has changed since then.",
      },
      {
        title: "Active water leaks",
        description:
          "Say clearly whether water is still escaping and, if known, whether the supply has been safely isolated.",
      },
      {
        title: "Heating status",
        description:
          "Confirm whether heating has stopped completely or whether only part of the system appears affected.",
      },
      {
        title: "Photographs",
        description:
          "Where useful and safe, photographs can help show the affected area during the initial discussion.",
      },
      {
        title: "Safe access",
        description:
          "Mention relevant access information, particularly if the affected area is difficult to reach safely.",
      },
    ],
  },
  safety: {
    eyebrow: "Immediate safety",
    title: "Put safety before the repair.",
    items: [
      "If water is actively escaping and you already know how to safely isolate the water supply, doing so may help limit damage.",
      "Do not attempt repairs that feel unsafe or are beyond your knowledge. Keep away from any affected area that presents a risk.",
      "If there is an immediate risk to people or property, use the appropriate emergency service rather than relying on a website enquiry.",
    ],
  },
  process: {
    eyebrow: "How the process works",
    title: "Four clear steps from contact to next actions.",
    description:
      "The first step is to provide enough information for the enquiry to be assessed and appropriate next actions to be discussed.",
    steps: [
      {
        title: "Contact us",
        description:
          "Send an enquiry with contact details so the problem can be reviewed.",
      },
      {
        title: "Explain the problem and location",
        description:
          "Describe what has happened, where the property is and whether water or heating is currently affected.",
      },
      {
        title: "We assess the information",
        description:
          "The details provided help establish the nature of the enquiry and whether further information is needed.",
      },
      {
        title: "Agree appropriate next steps",
        description:
          "Discuss what should happen next based on the problem, location and current availability.",
      },
    ],
  },
  serviceArea: {
    eyebrow: englishHomeContent.hero.area.eyebrow,
    title: "Urgent repair enquiries around Šiauliai.",
    description:
      "Our normal service area covers Šiauliai and the wider Žemaitija region, within an approximately 50 km radius.",
    noteTitle: "Location helps us assess the enquiry",
    noteDescription:
      "Include the property location when you contact us so we can determine whether the job is within the normal service area and discuss appropriate next steps.",
    linkLabel: englishHomeContent.region.link.label,
  },
  plannedWork: {
    eyebrow: "For planned work",
    title: "Use the regular service pages for non-urgent jobs.",
    description:
      "Maintenance, improvements and installations can be discussed through the service page that best matches the work.",
    services: [
      {
        title: englishNavigationLabels.heating,
        description:
          "Installation, maintenance, upgrades and non-urgent repairs.",
        path: "/heating",
        linkLabel: englishHomeContent.services.items[0].link.label,
      },
      {
        title: englishNavigationLabels.plumbing,
        description:
          "Everyday domestic repairs, alterations and renovation work.",
        path: "/plumbing",
        linkLabel: englishHomeContent.services.items[2].link.label,
      },
      {
        title: englishNavigationLabels.heatPumps,
        description:
          "Suitability, assessment and planned installation enquiries.",
        path: "/heat-pumps",
        linkLabel:
          englishHeatingContent.relatedServices.items[0].linkLabel,
      },
    ],
  },
  finalCta: {
    eyebrow: "Contact us",
    title: "Tell us what has happened.",
    description:
      "Provide the property location, a brief description of the issue and contact details so the enquiry can be assessed.",
    contactLabel: "Send an urgent repair enquiry",
  },
} as const satisfies EmergencyRepairsPageContent;

export const metadata = createLocalizedPageMetadata({
  title: englishEmergencyRepairsContent.metadata.title,
  description: englishEmergencyRepairsContent.metadata.description,
  path: "/emergency-repairs",
  locale: "en",
});

export default function EnglishEmergencyRepairsPage() {
  return (
    <EmergencyRepairsPage
      content={englishEmergencyRepairsContent}
      locale="en"
    />
  );
}
