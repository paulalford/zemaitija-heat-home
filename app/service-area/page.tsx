import type { Metadata } from "next";
import Link from "next/link";
import {
  ServiceCta,
  ServiceSection,
} from "@/components/service-page";
import { site } from "@/lib/site";

const title = "Heating & Plumbing Service Area Around Šiauliai";
const description =
  "Check coverage for heating, heat pump, plumbing and emergency repair enquiries around Šiauliai and Žemaitija, within an approximately 50 km service radius. A portfolio case study.";

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

const coverageDetails = [
  {
    title: "Šiauliai as the reference point",
    description:
      "Coverage is described in relation to Šiauliai so homeowners have a clear geographic starting point.",
  },
  {
    title: "Towns and villages",
    description:
      "The normal working area includes residential properties in surrounding communities across the region.",
  },
  {
    title: "Approximately 50 km",
    description:
      "The radius is a practical guide to normal coverage, rather than a precise boundary or an automatic acceptance area.",
  },
  {
    title: "Each enquiry is checked",
    description:
      "The exact property location and nature of the work help determine whether a job is within the normal service area.",
  },
];

const locationInformation = [
  {
    title: "Town or village",
    description: "Name the settlement or local area where the property is located.",
  },
  {
    title: "Property address",
    description: "Provide enough address detail for the location to be checked.",
  },
  {
    title: "Service required",
    description:
      "Say whether the enquiry concerns heating, a heat pump, plumbing or a repair.",
  },
  {
    title: "Planned or urgent",
    description:
      "Explain whether you are arranging future work or need an urgent problem assessed.",
  },
];

const regionalServices = [
  {
    title: "Heating",
    description:
      "Heating installation, repairs, maintenance and upgrades for residential properties.",
    href: "/heating",
    linkLabel: "View heating services",
  },
  {
    title: "Heat Pumps",
    description:
      "Heat pump suitability, assessment and planned installation enquiries.",
    href: "/heat-pumps",
    linkLabel: "Explore heat pump installation",
  },
  {
    title: "Plumbing",
    description:
      "General domestic plumbing repairs, alterations and renovation work.",
    href: "/plumbing",
    linkLabel: "View plumbing services",
  },
  {
    title: "Emergency Repairs",
    description:
      "Urgent heating and plumbing repair enquiries, assessed using the problem and location provided.",
    href: "/emergency-repairs",
    linkLabel: "View emergency repair information",
  },
];

export default function ServiceAreaPage() {
  return (
    <>
      <section className="service-area-hero" aria-labelledby="service-area-hero-heading">
        <div className="container service-area-hero-grid">
          <div className="service-area-hero-introduction">
            <p className="eyebrow">Local residential services · Žemaitija</p>
            <h1 id="service-area-hero-heading">
              Heating and plumbing services around Šiauliai.
            </h1>
            <p className="page-description">
              Our normal working area extends approximately 50 km from
              Šiauliai, serving surrounding towns, villages and rural
              properties across the wider Žemaitija region. Exact coverage is
              checked for each enquiry.
            </p>
            <div className="service-area-hero-action">
              <Link href="/contact" className="button">
                Check coverage for your property
              </Link>
            </div>
          </div>

          <figure
            className="service-area-visual"
            aria-labelledby="service-area-visual-title"
            aria-describedby="service-area-visual-description"
          >
            <div className="service-area-radius" aria-hidden="true">
              <span className="service-area-radius-centre">Šiauliai</span>
              <span className="service-area-radius-label">≈ 50 km</span>
            </div>
            <figcaption>
              <strong id="service-area-visual-title">
                Indicative normal service radius
              </strong>
              <span id="service-area-visual-description">
                Šiauliai is the geographic reference point. The diagram is a
                guide and does not represent a precise coverage boundary.
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      <ServiceSection
        id="main-service-coverage"
        eyebrow="Main service coverage"
        title="A normal working radius, checked job by job."
        description="The approximately 50 km radius helps explain the area we usually cover. It is not a guarantee that every property inside a mathematical circle can be accepted."
        surface
      >
        <ul className="coverage-details" role="list">
          {coverageDetails.map((detail) => (
            <li key={detail.title}>
              <h3>{detail.title}</h3>
              <p>{detail.description}</p>
            </li>
          ))}
        </ul>
      </ServiceSection>

      <ServiceSection
        id="check-your-location"
        eyebrow="How to check your location"
        title="Send the property details with your enquiry."
        description="A few practical details help confirm whether the property is within the normal service area and whether the job can be discussed further."
        split
      >
        <div className="location-check-details">
          <dl className="location-information-list">
            {locationInformation.map((item) => (
              <div key={item.title}>
                <dt>{item.title}</dt>
                <dd>{item.description}</dd>
              </div>
            ))}
          </dl>
          <div className="service-note">
            <h3>Why the type of work matters</h3>
            <p>
              Location is considered alongside the service required and the
              nature of the job. Include both when you get in touch so coverage
              can be checked using the relevant information.
            </p>
            <Link href="/contact" className="text-link">
              Send your location and service details
            </Link>
          </div>
        </div>
      </ServiceSection>

      <ServiceSection
        id="regional-services"
        eyebrow="Services across the region"
        title="One general service area for our core residential work."
        description="Heating, heat pump, plumbing and emergency repair enquiries use the same broad geographic coverage. Every enquiry is still checked using its location and scope."
        surface
      >
        <ul className="service-grid service-area-work-grid" role="list">
          {regionalServices.map((service) => (
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

      <ServiceSection
        id="rural-properties"
        eyebrow="Rural and outlying properties"
        title="Coverage includes more than larger settlements."
        description="Žemaitija includes villages and rural homes as well as larger settlements. These properties can be considered using the same location and job information as any other enquiry."
        split
      >
        <div className="service-note">
          <h3>Share the exact property location</h3>
          <p>
            An accurate address or clear location information is particularly
            useful for an outlying property. It allows coverage to be checked
            without implying a precise boundary or automatic acceptance.
          </p>
        </div>
      </ServiceSection>

      <ServiceCta
        title="Is your property within the normal service area?"
        description="Send the property location and the heating, heat pump, plumbing or repair service you need. We can check coverage and discuss the appropriate next steps."
        contactLabel="Check service-area coverage"
      />
    </>
  );
}
