import type { Metadata } from "next";
import { getPageTitle } from "@/lib/metadata";
import { localeConfig } from "@/lib/i18n";
import { site } from "@/lib/site";

const locale = "en";

export const englishSiteMetadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  title: {
    default: getPageTitle("Heating, Heat Pumps & Plumbing in Šiauliai"),
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: localeConfig[locale].openGraphLocale,
    title: getPageTitle("Heating, Heat Pumps & Plumbing in Šiauliai"),
    description: site.description,
    images: [
      {
        url: new URL("/en/opengraph-image", site.url).toString(),
        width: 1200,
        height: 630,
        alt: `${site.name} — heating, heat pumps and plumbing around Šiauliai`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: getPageTitle("Heating, Heat Pumps & Plumbing in Šiauliai"),
    description: site.description,
    images: [new URL("/en/opengraph-image", site.url).toString()],
  },
};
