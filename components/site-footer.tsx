import Link from "next/link";
import {
  getLocalizedPath,
  getNavigationLinks,
  type Locale,
} from "@/lib/i18n";
import { getSharedSiteContent } from "@/content/shared";

export function SiteFooter({ locale }: Readonly<{ locale: Locale }>) {
  const navigationLinks = getNavigationLinks(locale);
  const content = getSharedSiteContent(locale);
  const copyright = content.footer.copyright.replace(
    "{year}",
    new Date().getFullYear().toString(),
  );

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-introduction">
            <Link href={getLocalizedPath(locale, "/")} className="footer-name">
              {content.footer.businessName}
            </Link>
            <p>{content.footer.tagline}</p>
            <p>{content.footer.serviceArea}</p>
          </div>

          <nav aria-labelledby="footer-main-heading">
            <h2 id="footer-main-heading" className="footer-heading">
              {content.footer.exploreHeading}
            </h2>
            <ul className="footer-links">
              {navigationLinks
                .filter(({ group }) => group === "main")
                .map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-services-heading">
            <h2 id="footer-services-heading" className="footer-heading">
              {content.footer.servicesHeading}
            </h2>
            <ul className="footer-links">
              {navigationLinks
                .filter(({ group }) => group === "services")
                .map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>{copyright}</p>
          <p>{content.footer.disclosure}</p>
        </div>
      </div>
    </footer>
  );
}
