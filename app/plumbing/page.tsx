import Link from "next/link";
import {
  ServiceCta,
  ServiceHero,
  ServiceSection,
} from "@/components/service-page";
import { ServiceProcess } from "@/components/service-process";
import { createPageMetadata } from "@/lib/metadata";

const title = "Residential Plumbing Services in Šiauliai";
const description =
  "Explore domestic plumbing repairs and planned plumbing work for homes around Šiauliai and the wider Žemaitija region. A portfolio case study.";

export const metadata = createPageMetadata({
  title,
  description,
  path: "/plumbing",
});

const plumbingServiceGroups = [
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
];

const reasonsToCall = [
  "A visible leak from a tap, fixture or accessible pipework.",
  "A tap that continues to drip or needs replacing.",
  "Water flow that has changed or is causing concern.",
  "A toilet or cistern that is not working as expected.",
  "Pipework that is damaged or needs altering.",
  "Plumbing changes as part of a renovation.",
  "New fixtures or a different room layout.",
];

const plannedWork = [
  {
    title: "Bathroom renovation",
    description: "Plan pipework and fixture changes around the proposed layout.",
  },
  {
    title: "Kitchen changes",
    description: "Discuss sink, tap and water-supply work for a new arrangement.",
  },
  {
    title: "Relocating fixtures",
    description: "Review the pipework changes involved before work begins.",
  },
  {
    title: "Property refurbishment",
    description: "Coordinate several domestic plumbing tasks as rooms are updated.",
  },
  {
    title: "Heating pipework changes",
    description: "Plan related plumbing alongside heating installation or upgrades.",
  },
];

const plumbingProcess = [
  {
    title: "Contact",
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
    title: "Quotation / next steps",
    description:
      "Review the proposed work and quotation, then discuss timing and how to proceed.",
  },
];

const relatedServices = [
  {
    title: "Heating",
    description:
      "Explore heating installation, repairs, maintenance and upgrades for your home.",
    href: "/heating",
    linkLabel: "View heating services",
  },
  {
    title: "Heat Pumps",
    description:
      "Considering a new heating approach? Learn what a heat pump assessment should cover.",
    href: "/heat-pumps",
    linkLabel: "Explore heat pump installation",
  },
  {
    title: "Emergency Repairs",
    description:
      "If a plumbing or heating problem needs urgent attention, review the emergency repair information.",
    href: "/emergency-repairs",
    linkLabel: "View emergency repair information",
  },
];

export default function PlumbingPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Domestic plumbing · Šiauliai & Žemaitija"
        title="Practical plumbing help for your home."
        description="From a leaking tap to plumbing changes for a renovation, discuss domestic plumbing work in Šiauliai and the wider Žemaitija region."
        contactLabel="Discuss your plumbing job"
        contactHref="/contact?service=plumbing"
        secondaryHref="/emergency-repairs"
        secondaryLabel="Emergency repair information"
      />

      <ServiceSection
        id="plumbing-services"
        eyebrow="Plumbing services"
        title="Everyday repairs and planned changes."
        description="Help with general domestic plumbing around the home, from individual fixtures to pipework changes connected with a renovation or heating project."
        surface
      >
        <div className="plumbing-service-groups">
          {plumbingServiceGroups.map((group) => (
            <section key={group.title} aria-labelledby={`${group.title.toLowerCase().replaceAll(" ", "-")}-heading`}>
              <h3 id={`${group.title.toLowerCase().replaceAll(" ", "-")}-heading`}>
                {group.title}
              </h3>
              <p>{group.description}</p>
              <ul role="list">
                {group.services.map((service) => (
                  <li key={service.title}>
                    <strong>{service.title}</strong>
                    <span>{service.description}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection
        id="when-to-call-a-plumber"
        eyebrow="Common reasons to call"
        title="Tell us what you can see and what has changed."
        description="You do not need to identify the cause before getting in touch. Describe the problem, the affected fixture or room, and when you first noticed it."
        split
      >
        <div className="plumbing-call-details">
          <ul className="service-signs-list">
            {reasonsToCall.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
          <aside className="service-note" aria-labelledby="urgent-plumbing-heading">
            <h3 id="urgent-plumbing-heading">Does the work feel urgent?</h3>
            <p>
              If an active plumbing or heating problem needs prompt attention,
              see the Emergency Repairs page for the information to provide
              when contacting us. Availability and next steps depend on the
              situation and location.
            </p>
            <Link href="/emergency-repairs" className="text-link">
              View emergency repair information
            </Link>
          </aside>
        </div>
      </ServiceSection>

      <ServiceSection
        id="planned-plumbing-work"
        eyebrow="Planned plumbing work"
        title="Plumbing is part of planning a better space."
        description="Early discussion can help connect fixture choices and room layouts with the pipework changes needed for a renovation or refurbishment."
        surface
        split
      >
        <ul className="plumbing-planned-list" role="list">
          {plannedWork.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </ServiceSection>

      <ServiceSection
        id="plumbing-process"
        eyebrow="Our process"
        title="A straightforward route from enquiry to next steps."
        description="Start with the job and your location. An assessment can then establish the work involved before you decide how to proceed."
      >
        <ServiceProcess steps={plumbingProcess} />
      </ServiceSection>

      <ServiceSection
        id="plumbing-service-area"
        eyebrow="Our service area"
        title="Domestic plumbing around Šiauliai."
        description="We serve homes in Šiauliai and the wider Žemaitija region, with an approximately 50 km service radius."
        surface
        split
      >
        <div className="service-note">
          <h3>Include your location when you contact us</h3>
          <p>
            Tell us the town or village and describe the plumbing job so we can
            confirm coverage and discuss whether a site visit is needed.
          </p>
          <Link href="/service-area" className="text-link">
            View the service area
          </Link>
        </div>
      </ServiceSection>

      <ServiceSection
        id="related-services"
        eyebrow="Related services"
        title="Heating and urgent help for your home."
      >
        <ul className="service-grid related-services-grid" role="list">
          {relatedServices.map((service) => (
            <li key={service.href} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link href={service.href} className="text-link">
                {service.linkLabel}
              </Link>
            </li>
          ))}
        </ul>
      </ServiceSection>

      <ServiceCta
        title="What plumbing work does your home need?"
        description="Tell us where the property is, what needs repairing or what you plan to change. We can discuss the job, whether an assessment is needed and the next steps."
        contactLabel="Describe your plumbing job"
        contactHref="/contact?service=plumbing"
      />
    </>
  );
}
