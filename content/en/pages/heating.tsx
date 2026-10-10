import { HeatingPage, type HeatingPageContent } from "@/components/heating-page";
import { englishHomeContent } from "@/content/en/home";
import { englishNavigationLabels } from "@/content/en/navigation";
import { englishSharedContent } from "@/content/en/shared";
import { createLocalizedPageMetadata } from "@/lib/metadata";

export const englishHeatingContent = {
  metadata: {
    title: "Heating Installation & Repairs in Šiauliai",
    description:
      "Explore residential heating installation, repairs, maintenance and upgrades around Šiauliai and the wider Žemaitija region. A portfolio case study.",
  },
  hero: {
    eyebrow: "Residential heating · Šiauliai & Žemaitija",
    title: "Heating installation, repairs and care for your home.",
    description:
      "From a heating problem to a planned replacement, get help with residential heating in Šiauliai and the wider Žemaitija region. Discuss your existing system, your plans and the next steps.",
    contactLabel: "Request a heating quotation",
  },
  services: {
    eyebrow: "Heating services",
    title: "Support for your existing system and your next project.",
    description:
      "Installation, repairs, maintenance and improvements for residential heating. The right scope of work starts with understanding your home and its system.",
    items: [
      {
        title: "Heating system installation",
        description:
          "Plan heating for a home or renovation. Discuss the property, your needs and the work involved before choosing an installation approach.",
      },
      {
        title: "Heating repairs",
        description:
          "Get help when your heating is not working as expected. An assessment helps establish the issue and the repair options for your system.",
      },
      {
        title: englishSharedContent.structuredData.knowsAbout[3],
        description:
          "Arrange maintenance for your existing heating. Discuss the system and any concerns to understand what attention it may need.",
      },
      {
        title: "Upgrades and replacement",
        description:
          "Review an ageing system or plan changes as part of a renovation. Discuss what can be retained, improved or replaced and the proposed work.",
      },
      {
        title: "Radiator work",
        description:
          "Discuss radiator installation, replacement or repairs, whether you are changing a room layout or have a radiator that needs attention.",
      },
      {
        title: "Heating controls and improvements",
        description:
          "Review temperature controls and how heat is managed around your home. Discuss potential adjustments or replacements that suit the existing system.",
      },
    ],
  },
  whenToCall: {
    eyebrow: "When to call",
    title: "Something changed, or planning something new?",
    description:
      "These are reasons to discuss a heating assessment. Describe what you have noticed or what you are planning; the cause and any work needed depend on your home and its system.",
    signs: [
      "Rooms or radiators that do not warm up properly.",
      "New or unusual noises from the heating system.",
      "Temperatures that vary unexpectedly between rooms or throughout the day.",
      "A loss of heat or a system that stops working.",
      "An ageing system that you are considering repairing or replacing.",
      "A planned renovation, extension or heating upgrade.",
    ],
  },
  process: {
    eyebrow: "Our process",
    title: "From your heating enquiry to a clear plan.",
    description:
      "Start with your location and a description of the heating issue or project. We can then discuss an assessment, a quotation and how to proceed.",
    steps: [
      {
        title: englishHomeContent.process.steps[0].title,
        description:
          "Tell us where your property is and what heating work you need.",
      },
      {
        title: "Discuss your heating",
        description:
          "Talk through the heating problem or planned installation, maintenance or upgrade, and tell us about your existing system.",
      },
      {
        title: englishHomeContent.process.steps[2].title,
        description:
          "Arrange a visit where needed to assess your home’s heating system and understand the proposed work.",
      },
      {
        title: englishHomeContent.process.steps[3].title,
        description:
          "Review the proposed heating work and quotation, then discuss the next steps.",
      },
    ],
  },
  serviceArea: {
    eyebrow: englishHomeContent.hero.area.eyebrow,
    title: "Heating support around Šiauliai.",
    description:
      "We serve residential properties in Šiauliai and the wider Žemaitija region, with an approximately 50 km service radius.",
    noteTitle: "Check coverage for your home",
    noteDescription:
      "Include your property’s location when you enquire so we can confirm coverage for the work and discuss a site visit.",
    linkLabel: englishHomeContent.region.link.label,
  },
  relatedServices: {
    eyebrow: "Related services",
    title: "Other work your home may need.",
    items: [
      {
        title: englishNavigationLabels.heatPumps,
        description:
          "Considering a change to your heating? Explore heat pump installation and discuss suitability for your home.",
        path: "/heat-pumps",
        linkLabel: "Explore heat pump installation",
      },
      {
        title: englishNavigationLabels.plumbing,
        description:
          "For general domestic plumbing or plumbing work alongside a renovation, see our residential services.",
        path: "/plumbing",
        linkLabel: englishHomeContent.services.items[2].link.label,
      },
      {
        title: englishNavigationLabels.emergencyRepairs,
        description:
          "If a heating fault needs urgent attention, see our emergency repair information.",
        path: "/emergency-repairs",
        linkLabel: englishHomeContent.enquiry.emergencyLink.label,
      },
    ],
  },
  finalCta: {
    title: "Let’s talk about your heating.",
    description:
      "Tell us where your home is, what heating problem you have or what you would like to upgrade. Request a quotation or discuss a site visit and the next steps.",
    contactLabel: "Discuss your heating job",
  },
} as const satisfies HeatingPageContent;

export const metadata = createLocalizedPageMetadata({
  title: englishHeatingContent.metadata.title,
  description: englishHeatingContent.metadata.description,
  path: "/heating",
  locale: "en",
});

export default function EnglishHeatingPage() {
  return <HeatingPage content={englishHeatingContent} locale="en" />;
}
