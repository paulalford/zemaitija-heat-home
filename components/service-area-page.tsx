import Link from "next/link";
import { ServiceAreaChecker, type ServiceAreaCheckerContent } from "@/components/service-area-checker";
import { ServiceCta, ServiceSection } from "@/components/service-page";
import { getSharedSiteContent } from "@/content/shared";
import { getLocalizedPath, type Locale, type PublicPagePath } from "@/lib/i18n";

type Detail = Readonly<{ title: string; description: string }>;
type RelatedService = Detail & Readonly<{ path: PublicPagePath; linkLabel: string }>;

export type ServiceAreaPageContent = Readonly<{
  metadata: Readonly<{ title: string; description: string }>;
  hero: Readonly<{ eyebrow: string; title: string; description: string; contactLabel: string }>;
  visual: Readonly<{ centre: string; radius: string; title: string; description: string }>;
  coverage: Readonly<{ eyebrow: string; title: string; description: string; items: readonly Detail[] }>;
  checkerSection: Readonly<{ eyebrow: string; title: string; description: string; checker: ServiceAreaCheckerContent }>;
  locationDetails: Readonly<{ eyebrow: string; title: string; description: string; items: readonly Detail[]; noteTitle: string; noteDescription: string; contactLabel: string }>;
  regionalServices: Readonly<{ eyebrow: string; title: string; description: string; items: readonly RelatedService[] }>;
  ruralProperties: Readonly<{ eyebrow: string; title: string; description: string; noteTitle: string; noteDescription: string }>;
  finalCta: Readonly<{ title: string; description: string; contactLabel: string }>;
}>;

export function ServiceAreaPage({ content, locale }: Readonly<{ content: ServiceAreaPageContent; locale: Locale }>) {
  const sharedContent = getSharedSiteContent(locale);

  return <>
    <section className="service-area-hero" aria-labelledby="service-area-hero-heading">
      <div className="container service-area-hero-grid">
        <div className="service-area-hero-introduction">
          <p className="eyebrow">{content.hero.eyebrow}</p>
          <h1 id="service-area-hero-heading">{content.hero.title}</h1>
          <p className="page-description">{content.hero.description}</p>
          <div className="service-area-hero-action"><Link href={getLocalizedPath(locale, "/contact")} className="button">{content.hero.contactLabel}</Link></div>
        </div>
        <figure className="service-area-visual" aria-labelledby="service-area-visual-title" aria-describedby="service-area-visual-description">
          <div className="service-area-radius" aria-hidden="true"><span className="service-area-radius-centre">{content.visual.centre}</span><span className="service-area-radius-label">{content.visual.radius}</span></div>
          <figcaption><strong id="service-area-visual-title">{content.visual.title}</strong><span id="service-area-visual-description">{content.visual.description}</span></figcaption>
        </figure>
      </div>
    </section>

    <ServiceSection id="main-service-coverage" eyebrow={content.coverage.eyebrow} title={content.coverage.title} description={content.coverage.description} surface>
      <ul className="coverage-details" role="list">{content.coverage.items.map((item) => <li key={item.title}><h3>{item.title}</h3><p>{item.description}</p></li>)}</ul>
    </ServiceSection>
    <ServiceSection id="location-enquiry-checker" eyebrow={content.checkerSection.eyebrow} title={content.checkerSection.title} description={content.checkerSection.description} split>
      <ServiceAreaChecker content={content.checkerSection.checker} locale={locale} />
    </ServiceSection>
    <ServiceSection id="check-your-location" eyebrow={content.locationDetails.eyebrow} title={content.locationDetails.title} description={content.locationDetails.description} split>
      <div className="location-check-details">
        <dl className="location-information-list">{content.locationDetails.items.map((item) => <div key={item.title}><dt>{item.title}</dt><dd>{item.description}</dd></div>)}</dl>
        <div className="service-note"><h3>{content.locationDetails.noteTitle}</h3><p>{content.locationDetails.noteDescription}</p><Link href={getLocalizedPath(locale, "/contact")} className="text-link">{content.locationDetails.contactLabel}</Link></div>
      </div>
    </ServiceSection>
    <ServiceSection id="regional-services" eyebrow={content.regionalServices.eyebrow} title={content.regionalServices.title} description={content.regionalServices.description} surface>
      <ul className="service-grid service-area-work-grid" role="list">{content.regionalServices.items.map((service) => <li key={service.path} className="service-card"><h3>{service.title}</h3><p>{service.description}</p><Link href={getLocalizedPath(locale, service.path)} className="text-link">{service.linkLabel}</Link></li>)}</ul>
    </ServiceSection>
    <ServiceSection id="rural-properties" eyebrow={content.ruralProperties.eyebrow} title={content.ruralProperties.title} description={content.ruralProperties.description} split>
      <div className="service-note"><h3>{content.ruralProperties.noteTitle}</h3><p>{content.ruralProperties.noteDescription}</p></div>
    </ServiceSection>
    <ServiceCta eyebrow={sharedContent.servicePage.serviceCtaEyebrow} title={content.finalCta.title} description={content.finalCta.description} contactLabel={content.finalCta.contactLabel} locale={locale} />
  </>;
}
