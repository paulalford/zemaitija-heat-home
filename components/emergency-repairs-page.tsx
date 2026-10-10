import Image from "next/image";
import Link from "next/link";
import { ServiceSection } from "@/components/service-page";
import { ServiceProcess } from "@/components/service-process";
import {
  getLocalizedPath,
  type Locale,
  type PublicPagePath,
} from "@/lib/i18n";

type TextItem = Readonly<{
  title: string;
  description: string;
}>;

type PlannedService = TextItem &
  Readonly<{
    path: PublicPagePath;
    linkLabel: string;
  }>;

export type EmergencyRepairsPageContent = Readonly<{
  metadata: Readonly<{
    title: string;
    description: string;
  }>;
  hero: Readonly<{
    eyebrow: string;
    title: string;
    description: string;
    contactLabel: string;
    imageAlt: string;
    beforeContact: Readonly<{
      title: string;
      preparation: string;
      coverage: string;
    }>;
  }>;
  urgentProblems: Readonly<{
    eyebrow: string;
    title: string;
    description: string;
    items: readonly string[];
  }>;
  contactInformation: Readonly<{
    eyebrow: string;
    title: string;
    description: string;
    items: readonly TextItem[];
  }>;
  safety: Readonly<{
    eyebrow: string;
    title: string;
    items: readonly string[];
  }>;
  process: Readonly<{
    eyebrow: string;
    title: string;
    description: string;
    steps: readonly TextItem[];
  }>;
  serviceArea: Readonly<{
    eyebrow: string;
    title: string;
    description: string;
    noteTitle: string;
    noteDescription: string;
    linkLabel: string;
  }>;
  plannedWork: Readonly<{
    eyebrow: string;
    title: string;
    description: string;
    services: readonly PlannedService[];
  }>;
  finalCta: Readonly<{
    eyebrow: string;
    title: string;
    description: string;
    contactLabel: string;
  }>;
}>;

export function EmergencyRepairsPage({
  content,
  locale,
}: Readonly<{
  content: EmergencyRepairsPageContent;
  locale: Locale;
}>) {
  const contactHref = `${getLocalizedPath(locale, "/contact")}?service=emergency-repairs&enquiry=urgent`;

  return (
    <>
      <section className="emergency-hero" aria-labelledby="emergency-hero-heading">
        <div className="container emergency-hero-grid">
          <div className="emergency-hero-introduction">
            <p className="eyebrow">{content.hero.eyebrow}</p>
            <h1 id="emergency-hero-heading">{content.hero.title}</h1>
            <p className="page-description">{content.hero.description}</p>
            <div className="emergency-hero-action">
              <Link href={contactHref} className="button">
                {content.hero.contactLabel}
              </Link>
            </div>
          </div>

          <div className="emergency-hero-support">
            <div className="emergency-hero-media">
              <Image
                src="/images/emergency-repair-heating-system.png"
                alt={content.hero.imageAlt}
                fill
                loading="eager"
                sizes="(min-width: 1280px) 22rem, (min-width: 1024px) 30vw, calc(100vw - 2rem)"
              />
            </div>

            <aside
              className="emergency-hero-note"
              aria-labelledby="before-contact-heading"
            >
              <h2 id="before-contact-heading">
                {content.hero.beforeContact.title}
              </h2>
              <p>{content.hero.beforeContact.preparation}</p>
              <p>{content.hero.beforeContact.coverage}</p>
            </aside>
          </div>
        </div>
      </section>

      <ServiceSection
        id="urgent-problems"
        eyebrow={content.urgentProblems.eyebrow}
        title={content.urgentProblems.title}
        description={content.urgentProblems.description}
        surface
      >
        <ul className="emergency-problem-grid" role="list">
          {content.urgentProblems.items.map((problem) => (
            <li key={problem}>{problem}</li>
          ))}
        </ul>
      </ServiceSection>

      <ServiceSection
        id="what-to-tell-us"
        eyebrow={content.contactInformation.eyebrow}
        title={content.contactInformation.title}
        description={content.contactInformation.description}
      >
        <dl className="emergency-information-list">
          {content.contactInformation.items.map((item) => (
            <div key={item.title}>
              <dt>{item.title}</dt>
              <dd>{item.description}</dd>
            </div>
          ))}
        </dl>
      </ServiceSection>

      <section
        className="emergency-safety"
        aria-labelledby="immediate-safety-heading"
      >
        <div className="container emergency-safety-grid">
          <header>
            <p className="eyebrow">{content.safety.eyebrow}</p>
            <h2 id="immediate-safety-heading">{content.safety.title}</h2>
          </header>
          <ul>
            {content.safety.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <ServiceSection
        id="urgent-repair-process"
        eyebrow={content.process.eyebrow}
        title={content.process.title}
        description={content.process.description}
      >
        <ServiceProcess steps={content.process.steps} />
      </ServiceSection>

      <ServiceSection
        id="emergency-service-area"
        eyebrow={content.serviceArea.eyebrow}
        title={content.serviceArea.title}
        description={content.serviceArea.description}
        surface
        split
      >
        <div className="service-note">
          <h3>{content.serviceArea.noteTitle}</h3>
          <p>{content.serviceArea.noteDescription}</p>
          <Link
            href={getLocalizedPath(locale, "/service-area")}
            className="text-link"
          >
            {content.serviceArea.linkLabel}
          </Link>
        </div>
      </ServiceSection>

      <ServiceSection
        id="planned-work"
        eyebrow={content.plannedWork.eyebrow}
        title={content.plannedWork.title}
        description={content.plannedWork.description}
      >
        <ul className="emergency-planned-services" role="list">
          {content.plannedWork.services.map((service) => (
            <li key={service.path}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link
                href={getLocalizedPath(locale, service.path)}
                className="text-link"
              >
                {service.linkLabel}
              </Link>
            </li>
          ))}
        </ul>
      </ServiceSection>

      <section
        className="emergency-final-cta"
        aria-labelledby="emergency-contact-heading"
      >
        <div className="container emergency-final-cta-grid">
          <div>
            <p className="eyebrow">{content.finalCta.eyebrow}</p>
            <h2 id="emergency-contact-heading">{content.finalCta.title}</h2>
            <p>{content.finalCta.description}</p>
          </div>
          <Link href={contactHref} className="button">
            {content.finalCta.contactLabel}
          </Link>
        </div>
      </section>
    </>
  );
}
