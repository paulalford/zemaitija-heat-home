import type { Metadata } from "next";
import Link from "next/link";
import { ServiceCta } from "@/components/service-page";
import { ServiceProcess } from "@/components/service-process";
import { site } from "@/lib/site";

const title = "About Our Heating & Plumbing Service in Šiauliai";
const description =
  "Learn about the residential heating, heat pump and plumbing service approach of Žemaitija Heat & Home around Šiauliai and the wider Žemaitija region. A portfolio case study.";

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

const residentialCustomers = [
  {
    title: "Homeowners",
    description: "Everyday repairs, planned improvements and new installations.",
  },
  {
    title: "Landlords",
    description: "Residential heating and plumbing work for managed properties.",
  },
  {
    title: "People renovating",
    description: "Heating and plumbing changes considered alongside the wider project.",
  },
  {
    title: "Rural households",
    description: "Enquiries from villages and rural properties across the service area.",
  },
  {
    title: "Heating upgrades",
    description: "Homeowners reviewing an ageing system or considering a heat pump.",
  },
  {
    title: "Repairs and call-outs",
    description: "Customers who need a plumbing or heating problem assessed.",
  },
];

const workingPrinciples = [
  {
    title: "Understand the job first",
    description:
      "Start with the property, the current system or fixture, and what needs repairing or changing before proposing work.",
  },
  {
    title: "Explain the next steps",
    description:
      "Make clear what information is needed, whether an assessment may help and how the enquiry can move forward.",
  },
  {
    title: "Consider the whole property",
    description:
      "For an installation or renovation, account for the existing setup, layout and related work where it affects the proposed scope.",
  },
  {
    title: "Confirm local coverage",
    description:
      "Check the property location and type of job against the normal service area before making arrangements.",
  },
  {
    title: "Distinguish urgent and planned work",
    description:
      "Gather the right details for an urgent fault while giving planned maintenance, upgrades and renovations an appropriate process.",
  },
  {
    title: "Keep the work practical",
    description:
      "Use straightforward language and a scope that responds to the home and the job without adding unnecessary complexity.",
  },
];

const workProcess = [
  {
    title: "Get in touch",
    description:
      "Share the property location and a short description of the problem or planned work.",
  },
  {
    title: "Discuss the job",
    description:
      "Talk through what is needed, what is already in place and any relevant plans or concerns.",
  },
  {
    title: "Assess where needed",
    description:
      "Arrange a site assessment when the property or proposed work needs to be reviewed in person.",
  },
  {
    title: "Clarify scope and next steps",
    description:
      "Explain the work being considered and any information or decisions needed before proceeding.",
  },
  {
    title: "Discuss a quotation",
    description:
      "Where appropriate, review the proposed scope and quotation before agreeing how to move forward.",
  },
];

const services = [
  {
    title: "Heating",
    description: "Installation, repairs, maintenance and upgrades.",
    href: "/heating",
    linkLabel: "View heating services",
  },
  {
    title: "Heat Pumps",
    description: "Suitability, assessment and planned installation.",
    href: "/heat-pumps",
    linkLabel: "Explore heat pumps",
  },
  {
    title: "Plumbing",
    description: "Domestic repairs, fixtures and renovation work.",
    href: "/plumbing",
    linkLabel: "View plumbing services",
  },
  {
    title: "Emergency Repairs",
    description: "Information for urgent heating and plumbing enquiries.",
    href: "/emergency-repairs",
    linkLabel: "View emergency repair information",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="about-hero" aria-labelledby="about-hero-heading">
        <div className="container about-hero-grid">
          <div className="about-hero-introduction">
            <p className="eyebrow">About Žemaitija Heat &amp; Home</p>
            <h1 id="about-hero-heading">
              A practical local focus on homes and the work they need.
            </h1>
            <p className="page-description">
              Žemaitija Heat &amp; Home is a small residential heating and
              plumbing company serving customers around Šiauliai and the wider
              Žemaitija region.
            </p>
            <div className="about-hero-action">
              <Link href="/contact" className="button">
                Tell us about your property
              </Link>
            </div>
          </div>

          <aside className="about-hero-note" aria-labelledby="about-focus-heading">
            <p className="eyebrow">Our focus</p>
            <h2 id="about-focus-heading">Residential work, clearly explained.</h2>
            <p>
              From an individual repair to a heating upgrade or renovation,
              the approach begins with understanding the home, the work
              required and the appropriate next step.
            </p>
          </aside>
        </div>
      </section>

      <section
        className="about-section about-residential"
        aria-labelledby="residential-focus-heading"
      >
        <div className="container about-editorial-grid">
          <header className="about-section-heading">
            <p className="eyebrow">Residential focus</p>
            <h2 id="residential-focus-heading">Work centred on people’s homes.</h2>
            <p>
              The service is intended for residential properties and the
              practical heating and plumbing decisions that come with owning,
              managing or improving a home.
            </p>
          </header>
          <ul className="about-audience-list" role="list">
            {residentialCustomers.map((customer) => (
              <li key={customer.title}>
                <h3>{customer.title}</h3>
                <p>{customer.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="about-section about-section-surface"
        aria-labelledby="customer-expectations-heading"
      >
        <div className="container">
          <header className="about-section-heading">
            <p className="eyebrow">What customers can expect</p>
            <h2 id="customer-expectations-heading">
              Clear working principles instead of vague promises.
            </h2>
            <p>
              A reliable experience starts with how the enquiry is handled and
              how the proposed work is explained.
            </p>
          </header>
          <ol className="about-principles" role="list">
            {workingPrinciples.map((principle) => (
              <li key={principle.title}>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="about-section" aria-labelledby="work-approach-heading">
        <div className="container">
          <header className="about-section-heading">
            <p className="eyebrow">How we approach work</p>
            <h2 id="work-approach-heading">A sensible path from enquiry to scope.</h2>
            <p>
              The exact route depends on the job, but the general process keeps
              the property, the work and the next decision clear.
            </p>
          </header>
          <div className="about-process">
            <ServiceProcess steps={workProcess} />
          </div>
        </div>
      </section>

      <section
        className="about-section about-section-surface"
        aria-labelledby="about-local-service-heading"
      >
        <div className="container about-local-grid">
          <header className="about-section-heading">
            <p className="eyebrow">Local service</p>
            <h2 id="about-local-service-heading">
              Šiauliai and the wider Žemaitija region.
            </h2>
            <p>
              The normal service area extends approximately 50 km around
              Šiauliai and includes surrounding towns, villages and rural
              homes. Each enquiry is checked using the exact location and
              nature of the job.
            </p>
            <Link href="/service-area" className="text-link">
              Check the service area
            </Link>
          </header>
          <div className="about-region-callout" aria-label="Normal service radius">
            <strong>Approximately 50 km</strong>
            <span>Normal service radius around Šiauliai</span>
          </div>
        </div>
      </section>

      <section className="about-section" aria-labelledby="about-services-heading">
        <div className="container about-services-layout">
          <header className="about-section-heading">
            <p className="eyebrow">Our services</p>
            <h2 id="about-services-heading">Support for repairs and planned work.</h2>
            <p>
              Choose the service that best matches what is happening in your
              home or what you are planning next.
            </p>
          </header>
          <ul className="about-service-links" role="list">
            {services.map((service) => (
              <li key={service.href}>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <Link href={service.href} className="text-link">
                  {service.linkLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ServiceCta
        title="Tell us about your home and the work required."
        description="Share the property location, describe the heating or plumbing job and explain what you would like help with. We can discuss the enquiry and the appropriate next steps."
        contactLabel="Contact Žemaitija Heat & Home"
      />
    </>
  );
}
