import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { Locale } from "@/lib/i18n";
import { serviceCategories, site } from "@/lib/site";

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  description: site.description,
  areaServed: site.serviceArea,
  knowsAbout: serviceCategories,
};

export function SiteShell({
  children,
  locale,
}: Readonly<{ children: ReactNode; locale: Locale }>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <SiteHeader locale={locale} />
      <main id="main-content" className="site-main" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
