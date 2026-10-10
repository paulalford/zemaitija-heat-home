import Link from "next/link";
import type { ReactNode } from "react";
import { getLocalizedPath, type Locale } from "@/lib/i18n";

export function ServiceHero({
  eyebrow,
  title,
  description,
  contactLabel,
  contactHref,
  secondaryHref,
  secondaryLabel = "View all services",
  locale = "en",
}: Readonly<{
  eyebrow: string;
  title: string;
  description: string;
  contactLabel: string;
  contactHref?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  locale?: Locale;
}>) {
  const resolvedContactHref =
    contactHref ?? getLocalizedPath(locale, "/contact");
  const resolvedSecondaryHref =
    secondaryHref ?? `${getLocalizedPath(locale, "/")}#services`;

  return (
    <section className="service-hero" aria-labelledby="service-hero-heading">
      <div className="container">
        <div className="page-introduction">
          <p className="eyebrow">{eyebrow}</p>
          <h1 id="service-hero-heading">{title}</h1>
          <p className="page-description">{description}</p>
          <div className="service-actions">
            <Link href={resolvedContactHref} className="button">
              {contactLabel}
            </Link>
            <Link href={resolvedSecondaryHref} className="button button-secondary">
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceSection({
  id,
  eyebrow,
  title,
  description,
  surface = false,
  split = false,
  children,
}: Readonly<{
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  surface?: boolean;
  split?: boolean;
  children: ReactNode;
}>) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      className={`service-section${surface ? " service-section-surface" : ""}`}
      aria-labelledby={headingId}
    >
      <div className={`container${split ? " service-split" : ""}`}>
        <header className="service-section-heading">
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={headingId}>{title}</h2>
          {description && <p>{description}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}

export function ServiceCta({
  eyebrow = "Let’s discuss your home",
  title,
  description,
  contactLabel,
  contactHref,
  locale = "en",
}: Readonly<{
  eyebrow?: string;
  title: string;
  description: string;
  contactLabel: string;
  contactHref?: string;
  locale?: Locale;
}>) {
  const resolvedContactHref =
    contactHref ?? getLocalizedPath(locale, "/contact");

  return (
    <section
      className="service-section service-enquiry"
      aria-labelledby="service-enquiry-heading"
    >
      <div className="container service-split">
        <header className="service-section-heading">
          <p className="eyebrow">{eyebrow}</p>
          <h2 id="service-enquiry-heading">{title}</h2>
          <p>{description}</p>
        </header>
        <div className="enquiry-actions">
          <Link href={resolvedContactHref} className="button">
            {contactLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
