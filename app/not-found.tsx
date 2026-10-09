import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The requested page could not be found. Return home or continue to a main Žemaitija Heat & Home page.",
  robots: {
    index: false,
    follow: true,
  },
};

const mainPages = [
  { href: "/heating", label: "Heating" },
  { href: "/heat-pumps", label: "Heat Pumps" },
  { href: "/plumbing", label: "Plumbing" },
  { href: "/emergency-repairs", label: "Emergency Repairs" },
  { href: "/service-area", label: "Service Area" },
  { href: "/contact", label: "Contact" },
] as const;

export default function NotFound() {
  return (
    <section className="service-hero" aria-labelledby="not-found-heading">
      <div className="container service-split">
        <div className="page-introduction">
          <p className="eyebrow">Page not found</p>
          <h1 id="not-found-heading">We couldn&apos;t find that page.</h1>
          <p className="page-description">
            The page may have moved or the address may be incorrect. You can
            return home or continue to one of our main services.
          </p>
          <div className="service-actions">
            <Link href="/" className="button">
              Return home
            </Link>
          </div>
        </div>

        <nav className="service-note" aria-labelledby="not-found-links-heading">
          <p className="eyebrow">Main pages</p>
          <h2 id="not-found-links-heading">Continue browsing</h2>
          <div className="service-actions">
            <ul className="footer-links">
              {mainPages.map(({ href, label }) => (
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
