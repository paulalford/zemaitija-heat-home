import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { ServiceProcess } from "@/components/service-process";
import type { ContactPageContent } from "@/content/contact-content";
import { getContactFormPrefill, type ContactSearchParams } from "@/lib/contact-query";
import { getLocalizedPath, type Locale } from "@/lib/i18n";

export async function ContactPage({ content, locale, searchParams }: Readonly<{ content: ContactPageContent; locale: Locale; searchParams: Promise<ContactSearchParams> }>) {
  const query = await searchParams;
  const { service: initialService, enquiryType: initialEnquiryType, propertyLocation: initialPropertyLocation } = getContactFormPrefill(query);

  return <>
    <section className="contact-hero" aria-labelledby="contact-hero-heading"><div className="container contact-hero-grid">
      <div className="contact-hero-introduction"><p className="eyebrow">{content.hero.eyebrow}</p><h1 id="contact-hero-heading">{content.hero.title}</h1><p className="page-description">{content.hero.description}</p></div>
      <div className="contact-hero-note"><p className="eyebrow">{content.hero.locationNote.eyebrow}</p><p>{content.hero.locationNote.description}</p><Link href={getLocalizedPath(locale, "/service-area")} className="text-link">{content.hero.locationNote.linkLabel}</Link></div>
    </div></section>
    <section className="contact-enquiry" aria-labelledby="contact-enquiry-heading"><div className="container contact-enquiry-grid">
      <div><header className="contact-section-heading"><p className="eyebrow">{content.formSection.eyebrow}</p><h2 id="contact-enquiry-heading">{content.formSection.title}</h2><p>{content.formSection.introduction}</p></header><ContactForm key={`${initialService}:${initialEnquiryType}:${initialPropertyLocation}`} content={content.form} locale={locale} initialService={initialService} initialEnquiryType={initialEnquiryType} initialPropertyLocation={initialPropertyLocation} /></div>
      <aside className="contact-guidance" aria-label={content.guidance.ariaLabel}>
        <section aria-labelledby="urgent-enquiry-heading"><h3 id="urgent-enquiry-heading">{content.guidance.urgent.title}</h3><p>{content.guidance.urgent.description}</p><p>{content.guidance.urgent.safetyNotice}</p><Link href={getLocalizedPath(locale, "/emergency-repairs")} className="text-link">{content.guidance.urgent.linkLabel}</Link></section>
        <section aria-labelledby="contact-coverage-heading"><h3 id="contact-coverage-heading">{content.guidance.coverage.title}</h3><p>{content.guidance.coverage.description}</p><Link href={getLocalizedPath(locale, "/service-area")} className="text-link">{content.guidance.coverage.linkLabel}</Link></section>
      </aside>
    </div></section>
    <section className="contact-next-steps" aria-labelledby="contact-next-steps-heading"><div className="container"><header className="contact-section-heading"><p className="eyebrow">{content.nextSteps.eyebrow}</p><h2 id="contact-next-steps-heading">{content.nextSteps.title}</h2><p>{content.nextSteps.description}</p></header><ServiceProcess steps={content.nextSteps.items} /></div></section>
  </>;
}
