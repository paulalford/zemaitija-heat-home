import Image from "next/image";
import Link from "next/link";
import { ServiceSection } from "@/components/service-page";
import { ServiceProcess } from "@/components/service-process";
import { createPageMetadata } from "@/lib/metadata";

const title = "Emergency Heating & Plumbing Repairs in Šiauliai";
const description =
  "Guidance for urgent residential heating and plumbing repair enquiries around Šiauliai and the wider Žemaitija region. A portfolio case study.";

export const metadata = createPageMetadata({
  title,
  description,
  path: "/emergency-repairs",
});

const urgentProblems = [
  "An active water leak from accessible pipework or a household fixture.",
  "Burst or visibly damaged domestic pipework.",
  "A complete loss of heating that cannot reasonably wait for planned maintenance.",
  "Water leaking from a heating-system component.",
  "A significant plumbing fault affecting normal use of the home.",
  "Unexpected water appearing where it should not be.",
  "Another heating-system problem that appears to need prompt assessment.",
];

const contactInformation = [
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
];

const urgentRepairProcess = [
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
];

const plannedServices = [
  {
    title: "Heating",
    description: "Installation, maintenance, upgrades and non-urgent repairs.",
    href: "/heating",
    linkLabel: "View heating services",
  },
  {
    title: "Plumbing",
    description: "Everyday domestic repairs, alterations and renovation work.",
    href: "/plumbing",
    linkLabel: "View plumbing services",
  },
  {
    title: "Heat Pumps",
    description: "Suitability, assessment and planned installation enquiries.",
    href: "/heat-pumps",
    linkLabel: "Explore heat pump installation",
  },
];

export default function EmergencyRepairsPage() {
  return (
    <>
      <section className="emergency-hero" aria-labelledby="emergency-hero-heading">
        <div className="container emergency-hero-grid">
          <div className="emergency-hero-introduction">
            <p className="eyebrow">Urgent repairs · Šiauliai &amp; Žemaitija</p>
            <h1 id="emergency-hero-heading">
              Urgent heating or plumbing problem at home?
            </h1>
            <p className="page-description">
              Tell us what has happened and where the property is. We handle
              urgent repair enquiries around Šiauliai and the wider Žemaitija
              region.
            </p>
            <div className="emergency-hero-action">
              <Link
                href="/contact?service=emergency-repairs&enquiry=urgent"
                className="button"
              >
                Contact us about an urgent repair
              </Link>
            </div>
          </div>

          <div className="emergency-hero-support">
            <div className="emergency-hero-media">
              <Image
                src="/images/emergency-repair-heating-system.png"
                alt="Technician repairing a residential heating system"
                fill
                loading="eager"
                sizes="(min-width: 1280px) 22rem, (min-width: 1024px) 30vw, calc(100vw - 2rem)"
              />
            </div>

            <aside className="emergency-hero-note" aria-labelledby="before-contact-heading">
              <h2 id="before-contact-heading">Before you contact us</h2>
              <p>
                Have your location, a brief description of the problem and your
                contact details ready. Say clearly if water is actively leaking
                or the heating has stopped completely.
              </p>
              <p>
                Normal coverage is approximately 50 km around Šiauliai, across
                the wider Žemaitija region.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <ServiceSection
        id="urgent-problems"
        eyebrow="Problems that may need urgent attention"
        title="Describe what is happening without trying to diagnose it."
        description="These examples may warrant prompt assessment. The information you provide helps establish the appropriate next step; it does not mean every problem can be repaired immediately."
        surface
      >
        <ul className="emergency-problem-grid" role="list">
          {urgentProblems.map((problem) => (
            <li key={problem}>{problem}</li>
          ))}
        </ul>
      </ServiceSection>

      <ServiceSection
        id="what-to-tell-us"
        eyebrow="What to tell us"
        title="Useful details help us understand the situation quickly."
        description="Share what you know and avoid entering an unsafe area to collect more information. You do not need to identify the cause yourself."
      >
        <dl className="emergency-information-list">
          {contactInformation.map((item) => (
            <div key={item.title}>
              <dt>{item.title}</dt>
              <dd>{item.description}</dd>
            </div>
          ))}
        </dl>
      </ServiceSection>

      <section className="emergency-safety" aria-labelledby="immediate-safety-heading">
        <div className="container emergency-safety-grid">
          <header>
            <p className="eyebrow">Immediate safety</p>
            <h2 id="immediate-safety-heading">Put safety before the repair.</h2>
          </header>
          <ul>
            <li>
              If water is actively escaping and you already know how to safely
              isolate the water supply, doing so may help limit damage.
            </li>
            <li>
              Do not attempt repairs that feel unsafe or are beyond your
              knowledge. Keep away from any affected area that presents a risk.
            </li>
            <li>
              If there is an immediate risk to people or property, use the
              appropriate emergency service rather than relying on a website
              enquiry.
            </li>
          </ul>
        </div>
      </section>

      <ServiceSection
        id="urgent-repair-process"
        eyebrow="How the process works"
        title="Four clear steps from contact to next actions."
        description="The first step is to provide enough information for the enquiry to be assessed and appropriate next actions to be discussed."
      >
        <ServiceProcess steps={urgentRepairProcess} />
      </ServiceSection>

      <ServiceSection
        id="emergency-service-area"
        eyebrow="Our service area"
        title="Urgent repair enquiries around Šiauliai."
        description="Our normal service area covers Šiauliai and the wider Žemaitija region, within an approximately 50 km radius."
        surface
        split
      >
        <div className="service-note">
          <h3>Location helps us assess the enquiry</h3>
          <p>
            Include the property location when you contact us so we can
            determine whether the job is within the normal service area and
            discuss appropriate next steps.
          </p>
          <Link href="/service-area" className="text-link">
            View the service area
          </Link>
        </div>
      </ServiceSection>

      <ServiceSection
        id="planned-work"
        eyebrow="For planned work"
        title="Use the regular service pages for non-urgent jobs."
        description="Maintenance, improvements and installations can be discussed through the service page that best matches the work."
      >
        <ul className="emergency-planned-services" role="list">
          {plannedServices.map((service) => (
            <li key={service.href}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link href={service.href} className="text-link">
                {service.linkLabel}
              </Link>
            </li>
          ))}
        </ul>
      </ServiceSection>

      <section className="emergency-final-cta" aria-labelledby="emergency-contact-heading">
        <div className="container emergency-final-cta-grid">
          <div>
            <p className="eyebrow">Contact us</p>
            <h2 id="emergency-contact-heading">Tell us what has happened.</h2>
            <p>
              Provide the property location, a brief description of the issue
              and contact details so the enquiry can be assessed.
            </p>
          </div>
          <Link
            href="/contact?service=emergency-repairs&enquiry=urgent"
            className="button"
          >
            Send an urgent repair enquiry
          </Link>
        </div>
      </section>
    </>
  );
}
