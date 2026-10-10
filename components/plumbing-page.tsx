import Link from "next/link";
import {
  ServiceCta,
  ServiceHero,
  ServiceSection,
} from "@/components/service-page";
import { ServiceProcess } from "@/components/service-process";
import { getSharedSiteContent } from "@/content/shared";
import {
  getLocalizedPath,
  type Locale,
  type PublicPagePath,
} from "@/lib/i18n";

type TextItem = Readonly<{
  title: string;
  description: string;
}>;

type RelatedService = TextItem &
  Readonly<{
    path: PublicPagePath;
    linkLabel: string;
  }>;

export type PlumbingPageContent = Readonly<{
  metadata: Readonly<{
    title: string;
    description: string;
  }>;
  hero: Readonly<{
    eyebrow: string;
    title: string;
    description: string;
    contactLabel: string;
    emergencyLabel: string;
  }>;
  services: Readonly<{
    eyebrow: string;
    title: string;
    description: string;
    groups: readonly (TextItem &
      Readonly<{ services: readonly TextItem[] }>)[];
  }>;
  reasonsToCall: Readonly<{
    eyebrow: string;
    title: string;
    description: string;
    items: readonly string[];
    urgentNote: TextItem & Readonly<{ linkLabel: string }>;
  }>;
  plannedWork: Readonly<{
    eyebrow: string;
    title: string;
    description: string;
    items: readonly TextItem[];
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
  relatedServices: Readonly<{
    eyebrow: string;
    title: string;
    items: readonly RelatedService[];
  }>;
  finalCta: Readonly<{
    title: string;
    description: string;
    contactLabel: string;
  }>;
}>;

export function PlumbingPage({
  content,
  locale,
}: Readonly<{
  content: PlumbingPageContent;
  locale: Locale;
}>) {
  const sharedContent = getSharedSiteContent(locale);
  const contactHref = `${getLocalizedPath(locale, "/contact")}?service=plumbing`;
  const emergencyHref = getLocalizedPath(locale, "/emergency-repairs");

  return (
    <>
      <ServiceHero
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        description={content.hero.description}
        contactLabel={content.hero.contactLabel}
        contactHref={contactHref}
        secondaryHref={emergencyHref}
        secondaryLabel={content.hero.emergencyLabel}
        locale={locale}
      />

      <ServiceSection
        id="plumbing-services"
        eyebrow={content.services.eyebrow}
        title={content.services.title}
        description={content.services.description}
        surface
      >
        <div className="plumbing-service-groups">
          {content.services.groups.map((group) => {
            const headingId = `${group.title.toLowerCase().replaceAll(" ", "-")}-heading`;

            return (
              <section key={group.title} aria-labelledby={headingId}>
                <h3 id={headingId}>{group.title}</h3>
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
            );
          })}
        </div>
      </ServiceSection>

      <ServiceSection
        id="when-to-call-a-plumber"
        eyebrow={content.reasonsToCall.eyebrow}
        title={content.reasonsToCall.title}
        description={content.reasonsToCall.description}
        split
      >
        <div className="plumbing-call-details">
          <ul className="service-signs-list">
            {content.reasonsToCall.items.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
          <aside className="service-note" aria-labelledby="urgent-plumbing-heading">
            <h3 id="urgent-plumbing-heading">
              {content.reasonsToCall.urgentNote.title}
            </h3>
            <p>{content.reasonsToCall.urgentNote.description}</p>
            <Link href={emergencyHref} className="text-link">
              {content.reasonsToCall.urgentNote.linkLabel}
            </Link>
          </aside>
        </div>
      </ServiceSection>

      <ServiceSection
        id="planned-plumbing-work"
        eyebrow={content.plannedWork.eyebrow}
        title={content.plannedWork.title}
        description={content.plannedWork.description}
        surface
        split
      >
        <ul className="plumbing-planned-list" role="list">
          {content.plannedWork.items.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </ServiceSection>

      <ServiceSection
        id="plumbing-process"
        eyebrow={content.process.eyebrow}
        title={content.process.title}
        description={content.process.description}
      >
        <ServiceProcess steps={content.process.steps} />
      </ServiceSection>

      <ServiceSection
        id="plumbing-service-area"
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
        id="related-services"
        eyebrow={content.relatedServices.eyebrow}
        title={content.relatedServices.title}
      >
        <ul className="service-grid related-services-grid" role="list">
          {content.relatedServices.items.map((service) => (
            <li key={service.path} className="service-card">
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

      <ServiceCta
        eyebrow={sharedContent.servicePage.serviceCtaEyebrow}
        title={content.finalCta.title}
        description={content.finalCta.description}
        contactLabel={content.finalCta.contactLabel}
        contactHref={contactHref}
        locale={locale}
      />
    </>
  );
}
