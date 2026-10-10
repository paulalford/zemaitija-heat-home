import Link from "next/link";

type NotFoundPageProps = Readonly<{
  eyebrow: string;
  title: string;
  description: string;
  homeHref: string;
  homeLabel: string;
  navigationLabel: string;
  navigationHeading: string;
  links: readonly Readonly<{ href: string; label: string }>[];
}>;

export function NotFoundPage({
  eyebrow,
  title,
  description,
  homeHref,
  homeLabel,
  navigationLabel,
  navigationHeading,
  links,
}: NotFoundPageProps) {
  return (
    <section className="service-hero" aria-labelledby="not-found-heading">
      <div className="container service-split">
        <div className="page-introduction">
          <p className="eyebrow">{eyebrow}</p>
          <h1 id="not-found-heading">{title}</h1>
          <p className="page-description">{description}</p>
          <div className="service-actions">
            <Link href={homeHref} className="button">
              {homeLabel}
            </Link>
          </div>
        </div>

        <nav className="service-note" aria-labelledby="not-found-links-heading">
          <p className="eyebrow">{navigationLabel}</p>
          <h2 id="not-found-links-heading">{navigationHeading}</h2>
          <div className="service-actions">
            <ul className="footer-links">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
}
