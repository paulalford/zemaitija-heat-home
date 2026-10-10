import type { Metadata } from "next";
import { englishHomeContent } from "@/content/en/home";
import { getPageTitle } from "@/lib/metadata";
import { localeConfig } from "@/lib/i18n";
import { site } from "@/lib/site";

const locale = "en";

export const englishSiteMetadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  title: {
    default: getPageTitle(englishHomeContent.metadata.title),
    template: `%s | ${site.name}`,
  },
  description: englishHomeContent.metadata.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: localeConfig[locale].openGraphLocale,
    title: getPageTitle(englishHomeContent.metadata.title),
    description: englishHomeContent.metadata.description,
    images: [
      {
        url: new URL("/en/opengraph-image", site.url).toString(),
        width: 1200,
        height: 630,
        alt: englishHomeContent.metadata.socialImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: getPageTitle(englishHomeContent.metadata.title),
    description: englishHomeContent.metadata.description,
    images: [new URL("/en/opengraph-image", site.url).toString()],
  },
};
