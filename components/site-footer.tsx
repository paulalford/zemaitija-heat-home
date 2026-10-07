import Link from "next/link";
import { navigationLinks, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-introduction">
            <Link href="/" className="footer-name">
              {site.name}
            </Link>
            <p>Residential heating and plumbing.</p>
            <p>{site.serviceArea}.</p>
          </div>

          <nav aria-labelledby="footer-main-heading">
            <h2 id="footer-main-heading" className="footer-heading">
              Explore
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
              Services
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
          <p>© {new Date().getFullYear()} {site.name}.</p>
          <p>{site.disclosure}</p>
        </div>
      </div>
    </footer>
  );
}
