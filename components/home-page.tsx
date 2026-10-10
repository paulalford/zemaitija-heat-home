import Image from "next/image";
import Link from "next/link";
import { ServiceProcess } from "@/components/service-process";
import type { HomePageContent } from "@/content/home-content";
import { getLocalizedPath, type Locale } from "@/lib/i18n";

export function HomePage({
  content,
  locale,
}: Readonly<{
  content: HomePageContent;
  locale: Locale;
}>) {
  return (
    <>
      <section className="home-hero" aria-labelledby="hero-heading">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">{content.hero.eyebrow}</p>
            <h1 id="hero-heading">{content.hero.heading}</h1>
            <p className="page-description">{content.hero.description}</p>
            <div className="home-actions">
              <Link
                href={getLocalizedPath(locale, "/contact")}
                className="button"
              >
                {content.hero.contactLabel}
              </Link>
              <a href="#services" className="button button-secondary">
                {content.hero.servicesLabel}
              </a>
            </div>
          </div>

          <div className="home-hero-media">
            <div className="home-hero-image">
              <Image
                src={content.hero.image.src}
                alt={content.hero.image.alt}
                fill
                preload
                sizes="(min-width: 1280px) 35rem, (min-width: 1024px) 42vw, calc(100vw - 2rem)"
              />
            </div>
            <div className="hero-area">
              <p className="eyebrow">{content.hero.area.eyebrow}</p>
              <p className="hero-area-title">{content.hero.area.title}</p>
              <p>{content.hero.area.description}</p>
              <Link
                href={getLocalizedPath(locale, content.hero.area.link.path)}
                className="text-link"
              >
                {content.hero.area.link.label}
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
            <p className="eyebrow">{content.services.eyebrow}</p>
            <h2 id="services-heading">{content.services.heading}</h2>
            <p>{content.services.introduction}</p>
          </header>
          <ul className="service-grid" role="list">
            {content.services.items.map((service) => (
              <li key={service.link.path} className="service-card">
                <div className="service-card-media">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    sizes="(min-width: 1280px) 15rem, (min-width: 640px) calc(50vw - 4rem), calc(100vw - 5rem)"
                    className={service.image.className}
                  />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link
                  href={getLocalizedPath(locale, service.link.path)}
                  className="text-link"
                >
                  {service.link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="home-section" aria-labelledby="heat-pumps-heading">
        <div className="container home-split">
          <div className="home-section-heading">
            <p className="eyebrow">{content.heatPumps.eyebrow}</p>
            <h2 id="heat-pumps-heading">{content.heatPumps.heading}</h2>
            <p>{content.heatPumps.description}</p>
            <Link
              href={getLocalizedPath(locale, content.heatPumps.link.path)}
              className="text-link"
            >
              {content.heatPumps.link.label}
            </Link>
          </div>
          <div className="home-note">
            <h3>{content.heatPumps.noteHeading}</h3>
            <p>{content.heatPumps.noteDescription}</p>
            <p>{content.heatPumps.enquiryPrompt}</p>
          </div>
        </div>
      </section>

      <section
        className="home-section home-section-surface"
        aria-labelledby="why-choose-heading"
      >
        <div className="container home-split">
          <header className="home-section-heading">
            <p className="eyebrow">{content.whyChoose.eyebrow}</p>
            <h2 id="why-choose-heading">{content.whyChoose.heading}</h2>
            <p>{content.whyChoose.description}</p>
            <Link
              href={getLocalizedPath(locale, content.whyChoose.link.path)}
              className="text-link"
            >
              {content.whyChoose.link.label}
            </Link>
          </header>
          <ul className="reasons-grid" role="list">
            {content.whyChoose.reasons.map((reason) => (
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
            <p className="eyebrow">{content.process.eyebrow}</p>
            <h2 id="process-heading">{content.process.heading}</h2>
          </header>
          <ServiceProcess steps={content.process.steps} />
        </div>
      </section>

      <section
        className="home-section home-section-surface"
        aria-labelledby="service-area-heading"
      >
        <div className="container home-split">
          <header className="home-section-heading">
            <p className="eyebrow">{content.region.eyebrow}</p>
            <h2 id="service-area-heading">{content.region.heading}</h2>
            <p>{content.region.description}</p>
          </header>
          <div className="home-local-context">
            <div className="home-local-image">
              <Image
                src={content.region.image.src}
                alt={content.region.image.alt}
                fill
                sizes="(min-width: 1280px) 40rem, (min-width: 1024px) 57vw, calc(100vw - 2rem)"
              />
            </div>
            <div className="home-note">
              <h3>{content.region.noteHeading}</h3>
              <p>{content.region.noteDescription}</p>
              <Link
                href={getLocalizedPath(locale, content.region.link.path)}
                className="text-link"
              >
                {content.region.link.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className="home-section home-enquiry"
        aria-labelledby="enquiry-heading"
      >
        <div className="container home-split">
          <header className="home-section-heading">
            <p className="eyebrow">{content.enquiry.eyebrow}</p>
            <h2 id="enquiry-heading">{content.enquiry.heading}</h2>
            <p>{content.enquiry.description}</p>
          </header>
          <div className="enquiry-actions">
            <Link
              href={getLocalizedPath(locale, content.enquiry.contactLink.path)}
              className="button"
            >
              {content.enquiry.contactLink.label}
            </Link>
            <p>{content.enquiry.urgentPrompt}</p>
            <Link
              href={getLocalizedPath(locale, content.enquiry.emergencyLink.path)}
              className="text-link"
            >
              {content.enquiry.emergencyLink.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
