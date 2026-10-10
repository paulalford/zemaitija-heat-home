import Image from "next/image";
import Link from "next/link";
import { ServiceProcess } from "@/components/service-process";
import { createLocalizedPageMetadata } from "@/lib/metadata";

const title = "Heating, Heat Pumps & Plumbing in Šiauliai";
const description =
  "Residential heating, heat pump installation, plumbing and emergency repair services around Šiauliai and the wider Žemaitija region. A portfolio case study.";

export const metadata = createLocalizedPageMetadata({
  title,
  description,
  path: "/",
  locale: "en",
});

type HomeService = {
  title: string;
  description: string;
  href: string;
  linkLabel: string;
  image?: {
    src: string;
    alt: string;
    className?: string;
  };
};

const services: readonly HomeService[] = [
  {
    title: "Heating",
    description:
      "Heating system installation, repairs and upgrades, plus boiler and heating maintenance.",
    href: "/en/heating",
    linkLabel: "View heating services",
    image: {
      src: "/images/tidy_boiler_room_with_copper_pipework.png",
      alt: "Residential heating system with boiler and copper pipework",
      className: "service-card-image-heating",
    },
  },
  {
    title: "Heat Pumps",
    description:
      "Heat pump installation for homeowners considering a change to their heating system.",
    href: "/en/heat-pumps",
    linkLabel: "Explore heat pumps",
    image: {
      src: "/images/ChatGPT%20Image%20Oct%208%2C%202026%2C%2008_56_29%20PM-3.png",
      alt: "Outdoor air-source heat pump beside a detached home",
    },
  },
  {
    title: "Plumbing",
    description:
      "General domestic plumbing and residential call-outs for work around the home.",
    href: "/en/plumbing",
    linkLabel: "View plumbing services",
    image: {
      src: "/images/ChatGPT%20Image%20Oct%208%2C%202026%2C%2008_56_30%20PM-4.png",
      alt: "Plumber repairing pipework beneath a kitchen sink",
      className: "service-card-image-plumbing",
    },
  },
  {
    title: "Emergency Repairs",
    description:
      "Urgent heating and plumbing repairs when something at home needs attention.",
    href: "/en/emergency-repairs",
    linkLabel: "Emergency repair details",
    image: {
      src: "/images/emergency-repair-heating-system.png",
      alt: "Technician repairing a residential heating system",
      className: "service-card-image-emergency",
    },
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
      "Based around Šiauliai and the wider Žemaitija region, with an approximately 50 km service radius.",
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

export default function EnglishHomePage() {
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
              <Link href="/en/contact" className="button">
                Contact us about your job
              </Link>
              <a href="#services" className="button button-secondary">
                Explore our services
              </a>
            </div>
          </div>

          <div className="home-hero-media">
            <div className="home-hero-image">
              <Image
                src="/images/boiler_room_maintenance_in_progress.png"
                alt="Technician servicing a residential heating system in a utility room"
                fill
                preload
                sizes="(min-width: 1280px) 35rem, (min-width: 1024px) 42vw, calc(100vw - 2rem)"
              />
            </div>
            <div className="hero-area">
              <p className="eyebrow">Our service area</p>
              <p className="hero-area-title">Šiauliai &amp; Žemaitija</p>
              <p>
                Residential call-outs in Šiauliai and the surrounding towns and
                villages, with an approximately 50 km service radius.
              </p>
              <Link href="/en/service-area" className="text-link">
                Check your location
              </Link>
            </div>
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
              <li
                key={service.href}
                className={`service-card${
                  service.image ? "" : " service-card-text-only"
                }`}
              >
                {service.image && (
                  <div className="service-card-media">
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      fill
                      sizes="(min-width: 1280px) 15rem, (min-width: 640px) calc(50vw - 4rem), calc(100vw - 5rem)"
                      className={service.image.className}
                    />
                  </div>
                )}
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
            <Link href="/en/heat-pumps" className="text-link">
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
            <Link href="/en/about" className="text-link">
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
          <ServiceProcess />
        </div>
      </section>

      <section
        className="home-section home-section-surface"
        aria-labelledby="service-area-heading"
      >
        <div className="container home-split">
          <header className="home-section-heading">
            <p className="eyebrow">Working in the region</p>
            <h2 id="service-area-heading">Šiauliai and the wider Žemaitija region.</h2>
            <p>
              Residential heating and plumbing for Šiauliai and surrounding
              towns and villages, with an approximately 50 km service radius.
            </p>
          </header>
          <div className="home-local-context">
            <div className="home-local-image">
              <Image
                src="/images/ChatGPT%20Image%20Oct%208%2C%202026%2C%2008_56_31%20PM-5.png"
                alt="Rural home and countryside landscape"
                fill
                sizes="(min-width: 1280px) 40rem, (min-width: 1024px) 57vw, calc(100vw - 2rem)"
              />
            </div>
            <div className="home-note">
              <h3>Check coverage for your property</h3>
              <p>
                Include your location when you contact us so coverage can be
                confirmed for the job. This also helps plan a visit or assessment.
              </p>
              <Link href="/en/service-area" className="text-link">
                View the service area
              </Link>
            </div>
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
            <Link href="/en/contact" className="button">
              Contact Žemaitija Heat &amp; Home
            </Link>
            <p>Something needs urgent attention?</p>
            <Link href="/en/emergency-repairs" className="text-link">
              View emergency repair information
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
