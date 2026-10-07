import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

const title = `Heating, Heat Pumps & Plumbing in Šiauliai | ${site.name}`;
const description =
  "Residential heating, heat pump installation, plumbing and emergency repairs around Šiauliai and Samogitia, with an approximately 50 km service radius. A portfolio case study.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title,
    description,
  },
};

const services = [
  {
    title: "Heating",
    description:
      "Heating system installation, repairs and upgrades, plus boiler and heating maintenance.",
    href: "/heating",
    linkLabel: "View heating services",
  },
  {
    title: "Heat Pumps",
    description:
      "Heat pump installation for homeowners considering a change to their heating system.",
    href: "/heat-pumps",
    linkLabel: "Explore heat pumps",
  },
  {
    title: "Plumbing",
    description:
      "General domestic plumbing and residential call-outs for work around the home.",
    href: "/plumbing",
    linkLabel: "View plumbing services",
  },
  {
    title: "Emergency Repairs",
    description:
      "Urgent heating and plumbing repairs when something at home needs attention.",
    href: "/emergency-repairs",
    linkLabel: "Emergency repair details",
  },
];

const reasons = [
  {
    title: "A focus on homes",
    description:
      "Residential services for homeowners, landlords and people renovating properties.",
  },
  {
    title: "Clear local coverage",
    description:
      "Based around Šiauliai and the wider Samogitia region, with an approximately 50 km service radius.",
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
];

const steps = [
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
];

export default function HomePage() {
  return (
    <>
      <section className="home-hero" aria-labelledby="hero-heading">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Žemaitija Heat &amp; Home</p>
            <h1 id="hero-heading">Heating and plumbing for homes around Šiauliai.</h1>
            <p className="page-description">
              Heating repairs, new installations, heat pumps and everyday
              plumbing for residential properties.
            </p>
            <div className="home-actions">
              <Link href="/contact" className="button">
                Contact us about your job
              </Link>
              <a href="#services" className="button button-secondary">
                Explore our services
              </a>
            </div>
          </div>

          <div className="hero-area">
            <p className="eyebrow">Our service area</p>
            <p className="hero-area-title">Šiauliai &amp; Samogitia</p>
            <p>
              Residential call-outs in Šiauliai and the surrounding towns and
              villages, with an approximately 50 km service radius.
            </p>
            <Link href="/service-area" className="text-link">
              Check your location
            </Link>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="home-section home-section-surface"
        aria-labelledby="services-heading"
      >
        <div className="container">
          <header className="home-section-heading">
            <p className="eyebrow">Our services</p>
            <h2 id="services-heading">Help with heating, plumbing and urgent repairs.</h2>
            <p>Choose the service that matches your job.</p>
          </header>
          <ul className="service-grid" role="list">
            {services.map((service) => (
              <li key={service.href} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link href={service.href} className="text-link">
                  {service.linkLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="home-section" aria-labelledby="heat-pumps-heading">
        <div className="container home-split">
          <div className="home-section-heading">
            <p className="eyebrow">Heat pump installation</p>
            <h2 id="heat-pumps-heading">Considering a different way to heat your home?</h2>
            <p>
              If you are renovating or planning a heating upgrade, heat pump
              installation is an option to discuss. Start by looking at the
              property, your plans and the work an installation would involve.
            </p>
            <Link href="/heat-pumps" className="text-link">
              Learn about heat pump installation
            </Link>
          </div>
          <div className="home-note">
            <h3>Start with your home</h3>
            <p>
              A heating upgrade is a chance to review your current system and
              consider what suits the property. Discuss suitability and the
              installation process before deciding on a new system.
            </p>
            <p>
              Tell us about the home, its existing heating and any renovation
              plans when you enquire.
            </p>
          </div>
        </div>
      </section>

      <section
        className="home-section home-section-surface"
        aria-labelledby="why-choose-heading"
      >
        <div className="container home-split">
          <header className="home-section-heading">
            <p className="eyebrow">A local residential focus</p>
            <h2 id="why-choose-heading">Why choose Žemaitija Heat &amp; Home?</h2>
            <p>
              Heating and plumbing support for homes in the region, from
              maintenance and repairs to planned installation work.
            </p>
            <Link href="/about" className="text-link">
              About the company
            </Link>
          </header>
          <ul className="reasons-grid" role="list">
            {reasons.map((reason) => (
              <li key={reason.title}>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="home-section" aria-labelledby="process-heading">
        <div className="container">
          <header className="home-section-heading">
            <p className="eyebrow">How to get started</p>
            <h2 id="process-heading">From your first enquiry to the next steps.</h2>
          </header>
          <ol className="process-grid">
            {steps.map((step) => (
              <li key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="home-section home-section-surface"
        aria-labelledby="service-area-heading"
      >
        <div className="container home-split">
          <header className="home-section-heading">
            <p className="eyebrow">Working in the region</p>
            <h2 id="service-area-heading">Šiauliai and the wider Samogitia region.</h2>
            <p>
              Residential heating and plumbing for Šiauliai and surrounding
              towns and villages, with an approximately 50 km service radius.
            </p>
          </header>
          <div className="home-note">
            <h3>Check coverage for your property</h3>
            <p>
              Include your location when you contact us so coverage can be
              confirmed for the job. This also helps plan a visit or assessment.
            </p>
            <Link href="/service-area" className="text-link">
              View the service area
            </Link>
          </div>
        </div>
      </section>

      <section className="home-section home-enquiry" aria-labelledby="enquiry-heading">
        <div className="container home-split">
          <header className="home-section-heading">
            <p className="eyebrow">Let’s discuss the work</p>
            <h2 id="enquiry-heading">What does your home need?</h2>
            <p>
              Tell us about the property, your location and the heating or
              plumbing job. Start with an enquiry and discuss the next steps.
            </p>
          </header>
          <div className="enquiry-actions">
            <Link href="/contact" className="button">
              Contact Žemaitija Heat &amp; Home
            </Link>
            <p>Something needs urgent attention?</p>
            <Link href="/emergency-repairs" className="text-link">
              View emergency repair information
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
