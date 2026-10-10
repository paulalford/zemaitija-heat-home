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

export type HeatingPageContent = Readonly<{
  metadata: Readonly<{
    title: string;
    description: string;
  }>;
  hero: Readonly<{
    eyebrow: string;
    title: string;
    description: string;
    contactLabel: string;
  }>;
  services: Readonly<{
    eyebrow: string;
    title: string;
    description: string;
    items: readonly TextItem[];
  }>;
  whenToCall: Readonly<{
    eyebrow: string;
    title: string;
    description: string;
    signs: readonly string[];
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

export function HeatingPage({
  content,
  locale,
}: Readonly<{
  content: HeatingPageContent;
  locale: Locale;
}>) {
  const sharedContent = getSharedSiteContent(locale);

  return (
    <>
      <ServiceHero
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        description={content.hero.description}
        contactLabel={content.hero.contactLabel}
        contactHref={`${getLocalizedPath(locale, "/contact")}?service=heating`}
        secondaryLabel={sharedContent.servicePage.viewAllServicesLabel}
        locale={locale}
      />

      <ServiceSection
        id="heating-services"
        eyebrow={content.services.eyebrow}
        title={content.services.title}
        description={content.services.description}
        surface
      >
        <ul className="service-offerings-grid" role="list">
          {content.services.items.map((service) => (
            <li key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      </ServiceSection>

      <ServiceSection
        id="when-to-call"
        eyebrow={content.whenToCall.eyebrow}
        title={content.whenToCall.title}
        description={content.whenToCall.description}
        split
      >
        <ul className="service-signs-list">
          {content.whenToCall.signs.map((sign) => (
            <li key={sign}>{sign}</li>
          ))}
        </ul>
      </ServiceSection>

      <ServiceSection
        id="heating-process"
        eyebrow={content.process.eyebrow}
        title={content.process.title}
        description={content.process.description}
        surface
      >
        <ServiceProcess steps={content.process.steps} />
      </ServiceSection>

      <ServiceSection
        id="heating-service-area"
        eyebrow={content.serviceArea.eyebrow}
        title={content.serviceArea.title}
        description={content.serviceArea.description}
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
        surface
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
        contactHref={`${getLocalizedPath(locale, "/contact")}?service=heating`}
        locale={locale}
      />
    </>
  );
}
