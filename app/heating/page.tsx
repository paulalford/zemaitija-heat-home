import type { Metadata } from "next";
import Link from "next/link";
import {
  ServiceCta,
  ServiceHero,
  ServiceSection,
} from "@/components/service-page";
import { ServiceProcess } from "@/components/service-process";
import { site } from "@/lib/site";

const title = "Heating Installation & Repairs in Šiauliai";
const description =
  "Residential heating installation, repairs, maintenance and upgrades around Šiauliai and Žemaitija, with an approximately 50 km service radius. A portfolio case study.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${title} | ${site.name}`,
    description,
  },
};

const heatingServices = [
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
    title: "Boiler and heating maintenance",
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
];

const signsToCall = [
  "Rooms or radiators that do not warm up properly.",
  "New or unusual noises from the heating system.",
  "Temperatures that vary unexpectedly between rooms or throughout the day.",
  "A loss of heat or a system that stops working.",
  "An ageing system that you are considering repairing or replacing.",
  "A planned renovation, extension or heating upgrade.",
];

const heatingProcess = [
  {
    title: "Contact",
    description:
      "Tell us where your property is and what heating work you need.",
  },
  {
    title: "Discuss your heating",
    description:
      "Talk through the heating problem or planned installation, maintenance or upgrade, and tell us about your existing system.",
  },
  {
    title: "Site visit / assessment",
    description:
      "Arrange a visit where needed to assess your home’s heating system and understand the proposed work.",
  },
  {
    title: "Quotation / next steps",
    description:
      "Review the proposed heating work and quotation, then discuss the next steps.",
  },
];

const relatedServices = [
  {
    title: "Heat Pumps",
    description:
      "Considering a change to your heating? Explore heat pump installation and discuss suitability for your home.",
    href: "/heat-pumps",
    linkLabel: "Explore heat pump installation",
  },
  {
    title: "Plumbing",
    description:
      "For general domestic plumbing or plumbing work alongside a renovation, see our residential services.",
    href: "/plumbing",
    linkLabel: "View plumbing services",
  },
  {
    title: "Emergency Repairs",
    description:
      "If a heating fault needs urgent attention, see our emergency repair information.",
    href: "/emergency-repairs",
    linkLabel: "View emergency repair information",
  },
];

export default function HeatingPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Residential heating · Šiauliai & Žemaitija"
        title="Heating installation, repairs and care for your home."
        description="From a heating problem to a planned replacement, get help with residential heating in Šiauliai and the wider Žemaitija region. Discuss your existing system, your plans and the next steps."
        contactLabel="Request a heating quotation"
        contactHref="/contact?service=heating"
      />

      <ServiceSection
        id="heating-services"
        eyebrow="Heating services"
        title="Support for your existing system and your next project."
        description="Installation, repairs, maintenance and improvements for residential heating. The right scope of work starts with understanding your home and its system."
        surface
      >
        <ul className="service-offerings-grid" role="list">
          {heatingServices.map((service) => (
            <li key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      </ServiceSection>

      <ServiceSection
        id="when-to-call"
        eyebrow="When to call"
        title="Something changed, or planning something new?"
        description="These are reasons to discuss a heating assessment. Describe what you have noticed or what you are planning; the cause and any work needed depend on your home and its system."
        split
      >
        <ul className="service-signs-list">
          {signsToCall.map((sign) => (
            <li key={sign}>{sign}</li>
          ))}
        </ul>
      </ServiceSection>

      <ServiceSection
        id="heating-process"
        eyebrow="Our process"
        title="From your heating enquiry to a clear plan."
        description="Start with your location and a description of the heating issue or project. We can then discuss an assessment, a quotation and how to proceed."
        surface
      >
        <ServiceProcess steps={heatingProcess} />
      </ServiceSection>

      <ServiceSection
        id="heating-service-area"
        eyebrow="Our service area"
        title="Heating support around Šiauliai."
        description="We serve residential properties in Šiauliai and the wider Žemaitija region, with an approximately 50 km service radius."
        split
      >
        <div className="service-note">
          <h3>Check coverage for your home</h3>
          <p>
            Include your property’s location when you enquire so we can confirm
            coverage for the work and discuss a site visit.
          </p>
          <Link href="/service-area" className="text-link">
            View the service area
          </Link>
        </div>
      </ServiceSection>

      <ServiceSection
        id="related-services"
        eyebrow="Related services"
        title="Other work your home may need."
        surface
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
        title="Let’s talk about your heating."
        description="Tell us where your home is, what heating problem you have or what you would like to upgrade. Request a quotation or discuss a site visit and the next steps."
        contactLabel="Discuss your heating job"
        contactHref="/contact?service=heating"
      />
    </>
  );
}
