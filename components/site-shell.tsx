import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getSharedSiteContent } from "@/content/shared";
import {
  getLocalizedPath,
  getNavigationLinks,
  type Locale,
} from "@/lib/i18n";
import { site } from "@/lib/site";

export function SiteShell({
  children,
  locale,
}: Readonly<{ children: ReactNode; locale: Locale }>) {
  const content = getSharedSiteContent(locale);
  const headerContent = {
    brand: content.brand,
    mobileNavigation: content.mobileNavigation,
    accessibility: {
      homeLinkLabel: content.accessibility.homeLinkLabel,
      openMainMenu: content.accessibility.openMainMenu,
      closeMainMenu: content.accessibility.closeMainMenu,
      mainNavigation: content.accessibility.mainNavigation,
    },
  };
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: content.structuredData.description,
    areaServed: content.structuredData.areaServed,
    knowsAbout: content.structuredData.knowsAbout,
  };

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
        {content.accessibility.skipToMainContent}
      </a>
      <SiteHeader
        content={headerContent}
        locale={locale}
        homeHref={getLocalizedPath(locale, "/")}
        navigationLinks={getNavigationLinks(locale)}
      />
      <main id="main-content" className="site-main" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
