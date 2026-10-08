import Link from "next/link";
import type { ReactNode } from "react";

export function ServiceHero({
  eyebrow,
  title,
  description,
  contactLabel,
  secondaryHref = "/#services",
  secondaryLabel = "View all services",
}: Readonly<{
  eyebrow: string;
  title: string;
  description: string;
  contactLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}>) {
  return (
    <section className="service-hero" aria-labelledby="service-hero-heading">
      <div className="container">
        <div className="page-introduction">
          <p className="eyebrow">{eyebrow}</p>
          <h1 id="service-hero-heading">{title}</h1>
          <p className="page-description">{description}</p>
          <div className="service-actions">
            <Link href="/contact" className="button">
              {contactLabel}
            </Link>
            <Link href={secondaryHref} className="button button-secondary">
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
  title,
  description,
  contactLabel,
}: Readonly<{
  title: string;
  description: string;
  contactLabel: string;
}>) {
  return (
    <section
      className="service-section service-enquiry"
      aria-labelledby="service-enquiry-heading"
    >
      <div className="container service-split">
        <header className="service-section-heading">
          <p className="eyebrow">Let’s discuss your home</p>
          <h2 id="service-enquiry-heading">{title}</h2>
          <p>{description}</p>
        </header>
        <div className="enquiry-actions">
          <Link href="/contact" className="button">
            {contactLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
