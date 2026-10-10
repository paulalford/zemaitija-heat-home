import Link from "next/link";
import { ServiceCta } from "@/components/service-page";
import { ServiceProcess } from "@/components/service-process";
import { getSharedSiteContent } from "@/content/shared";
import { getLocalizedPath, type Locale, type PublicPagePath } from "@/lib/i18n";

type Detail = Readonly<{ title: string; description: string }>;
type RelatedService = Detail & Readonly<{ path: PublicPagePath; linkLabel: string }>;

export type AboutPageContent = Readonly<{
  metadata: Readonly<{ title: string; description: string }>;
  hero: Readonly<{ eyebrow: string; title: string; description: string; contactLabel: string; note: Readonly<{ eyebrow: string; title: string; description: string }> }>;
  residentialFocus: Readonly<{ eyebrow: string; title: string; description: string; items: readonly Detail[] }>;
  principles: Readonly<{ eyebrow: string; title: string; description: string; items: readonly Detail[] }>;
  process: Readonly<{ eyebrow: string; title: string; description: string; steps: readonly Detail[] }>;
  localService: Readonly<{ eyebrow: string; title: string; description: string; linkLabel: string; radiusAriaLabel: string; radiusValue: string; radiusDescription: string }>;
  services: Readonly<{ eyebrow: string; title: string; description: string; items: readonly RelatedService[] }>;
  finalCta: Readonly<{ title: string; description: string; contactLabel: string }>;
}>;

export function AboutPage({ content, locale }: Readonly<{ content: AboutPageContent; locale: Locale }>) {
  const sharedContent = getSharedSiteContent(locale);
  return <>
    <section className="about-hero" aria-labelledby="about-hero-heading"><div className="container about-hero-grid">
      <div className="about-hero-introduction"><p className="eyebrow">{content.hero.eyebrow}</p><h1 id="about-hero-heading">{content.hero.title}</h1><p className="page-description">{content.hero.description}</p><div className="about-hero-action"><Link href={getLocalizedPath(locale, "/contact")} className="button">{content.hero.contactLabel}</Link></div></div>
      <aside className="about-hero-note" aria-labelledby="about-focus-heading"><p className="eyebrow">{content.hero.note.eyebrow}</p><h2 id="about-focus-heading">{content.hero.note.title}</h2><p>{content.hero.note.description}</p></aside>
    </div></section>
    <section className="about-section about-residential" aria-labelledby="residential-focus-heading"><div className="container about-editorial-grid"><header className="about-section-heading"><p className="eyebrow">{content.residentialFocus.eyebrow}</p><h2 id="residential-focus-heading">{content.residentialFocus.title}</h2><p>{content.residentialFocus.description}</p></header><ul className="about-audience-list" role="list">{content.residentialFocus.items.map((item) => <li key={item.title}><h3>{item.title}</h3><p>{item.description}</p></li>)}</ul></div></section>
    <section className="about-section about-section-surface" aria-labelledby="customer-expectations-heading"><div className="container"><header className="about-section-heading"><p className="eyebrow">{content.principles.eyebrow}</p><h2 id="customer-expectations-heading">{content.principles.title}</h2><p>{content.principles.description}</p></header><ol className="about-principles" role="list">{content.principles.items.map((item) => <li key={item.title}><h3>{item.title}</h3><p>{item.description}</p></li>)}</ol></div></section>
    <section className="about-section" aria-labelledby="work-approach-heading"><div className="container"><header className="about-section-heading"><p className="eyebrow">{content.process.eyebrow}</p><h2 id="work-approach-heading">{content.process.title}</h2><p>{content.process.description}</p></header><div className="about-process"><ServiceProcess steps={content.process.steps} /></div></div></section>
    <section className="about-section about-section-surface" aria-labelledby="about-local-service-heading"><div className="container about-local-grid"><header className="about-section-heading"><p className="eyebrow">{content.localService.eyebrow}</p><h2 id="about-local-service-heading">{content.localService.title}</h2><p>{content.localService.description}</p><Link href={getLocalizedPath(locale, "/service-area")} className="text-link">{content.localService.linkLabel}</Link></header><div className="about-region-callout" aria-label={content.localService.radiusAriaLabel}><strong>{content.localService.radiusValue}</strong><span>{content.localService.radiusDescription}</span></div></div></section>
    <section className="about-section" aria-labelledby="about-services-heading"><div className="container about-services-layout"><header className="about-section-heading"><p className="eyebrow">{content.services.eyebrow}</p><h2 id="about-services-heading">{content.services.title}</h2><p>{content.services.description}</p></header><ul className="about-service-links" role="list">{content.services.items.map((service) => <li key={service.path}><div><h3>{service.title}</h3><p>{service.description}</p></div><Link href={getLocalizedPath(locale, service.path)} className="text-link">{service.linkLabel}</Link></li>)}</ul></div></section>
    <ServiceCta eyebrow={sharedContent.servicePage.serviceCtaEyebrow} title={content.finalCta.title} description={content.finalCta.description} contactLabel={content.finalCta.contactLabel} locale={locale} />
  </>;
}
