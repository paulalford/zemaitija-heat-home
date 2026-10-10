import type { Metadata } from "next";
import { lithuanianHomeContent } from "@/content/lt/home";
import { localeConfig } from "@/lib/i18n";
import { getPageTitle } from "@/lib/metadata";
import { site } from "@/lib/site";

const locale = "lt";

export const lithuanianSiteMetadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  title: {
    default: getPageTitle(lithuanianHomeContent.metadata.title),
    template: `%s | ${site.name}`,
  },
  description: lithuanianHomeContent.metadata.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: localeConfig[locale].openGraphLocale,
    title: getPageTitle(lithuanianHomeContent.metadata.title),
    description: lithuanianHomeContent.metadata.description,
    images: [
      {
        url: new URL("/lt/opengraph-image", site.url).toString(),
        width: 1200,
        height: 630,
        alt: lithuanianHomeContent.metadata.socialImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: getPageTitle(lithuanianHomeContent.metadata.title),
    description: lithuanianHomeContent.metadata.description,
    images: [new URL("/lt/opengraph-image", site.url).toString()],
  },
};
