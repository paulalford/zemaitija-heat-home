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

export type HeatPumpsPageContent = Readonly<{
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
  consideration: Readonly<{
    eyebrow: string;
    title: string;
    description: string;
    items: readonly TextItem[];
  }>;
  suitability: Readonly<{
    eyebrow: string;
    title: string;
    description: string;
    factors: readonly TextItem[];
  }>;
  assessment: Readonly<{
    eyebrow: string;
    title: string;
    description: string;
    details: readonly TextItem[];
    enquiryInformation: TextItem;
    installation: TextItem;
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

export function HeatPumpsPage({
  content,
  locale,
}: Readonly<{
  content: HeatPumpsPageContent;
  locale: Locale;
}>) {
  const sharedContent = getSharedSiteContent(locale);
  const contactHref = `${getLocalizedPath(locale, "/contact")}?service=heat-pumps&enquiry=planned`;

  return (
    <>
      <ServiceHero
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        description={content.hero.description}
        contactLabel={content.hero.contactLabel}
        contactHref={contactHref}
        secondaryLabel={sharedContent.servicePage.viewAllServicesLabel}
        locale={locale}
      />

      <ServiceSection
        id="when-to-consider"
        eyebrow={content.consideration.eyebrow}
        title={content.consideration.title}
        description={content.consideration.description}
        surface
        split
      >
        <ul className="service-signs-list heat-pump-considerations">
          {content.consideration.items.map((reason) => (
            <li key={reason.title}>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </li>
          ))}
        </ul>
      </ServiceSection>

      <ServiceSection
        id="heat-pump-suitability"
        eyebrow={content.suitability.eyebrow}
        title={content.suitability.title}
        description={content.suitability.description}
      >
        <dl className="heat-pump-factors">
          {content.suitability.factors.map((factor) => (
            <div key={factor.title}>
              <dt>{factor.title}</dt>
              <dd>{factor.description}</dd>
            </div>
          ))}
        </dl>
      </ServiceSection>

      <section
        id="heat-pump-assessment"
        className="service-section service-section-surface"
        aria-labelledby="heat-pump-assessment-heading"
      >
        <div className="container heat-pump-assessment-grid">
          <div className="heat-pump-assessment-main">
            <header className="service-section-heading">
              <p className="eyebrow">{content.assessment.eyebrow}</p>
              <h2 id="heat-pump-assessment-heading">
                {content.assessment.title}
              </h2>
              <p>{content.assessment.description}</p>
            </header>
            <ul className="service-signs-list">
              {content.assessment.details.map((detail) => (
                <li key={detail.title}>
                  <strong>{detail.title}:</strong> {detail.description}
                </li>
              ))}
            </ul>
          </div>
          <aside
            className="service-note"
            aria-labelledby="heat-pump-enquiry-information-heading"
          >
            <h3 id="heat-pump-enquiry-information-heading">
              {content.assessment.enquiryInformation.title}
            </h3>
            <p>{content.assessment.enquiryInformation.description}</p>
            <h3 className="heat-pump-installation-heading">
              {content.assessment.installation.title}
            </h3>
            <p>{content.assessment.installation.description}</p>
          </aside>
        </div>
      </section>

      <ServiceSection
        id="heat-pump-process"
        eyebrow={content.process.eyebrow}
        title={content.process.title}
        description={content.process.description}
        split
      >
        <div className="heat-pump-process">
          <ServiceProcess steps={content.process.steps} />
        </div>
      </ServiceSection>

      <ServiceSection
        id="heat-pump-service-area"
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
