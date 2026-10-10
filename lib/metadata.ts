import type { Metadata } from "next";
import {
  defaultLocale,
  getLocalizedPath,
  localeConfig,
  publishedLocales,
  type Locale,
  type PublicPagePath,
} from "@/lib/i18n";
import { site } from "@/lib/site";

const socialImage = {
  url: new URL("/en/opengraph-image", site.url).toString(),
  width: 1200,
  height: 630,
  alt: `${site.name} — heating, heat pumps and plumbing around Šiauliai`,
};

export function getPageTitle(title: string) {
  return `${title} | ${site.name}`;
}

export function createPageMetadata({
  title,
  description,
  path,
}: Readonly<{
  title: string;
  description: string;
  path?: string;
}>): Metadata {
  const fullTitle = getPageTitle(title);

  return {
    metadataBase: new URL(site.url),
    title: { absolute: fullTitle },
    description,
    ...(path ? { alternates: { canonical: path } } : {}),
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: site.locale,
      title: fullTitle,
      description,
      ...(path ? { url: path } : {}),
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [socialImage],
    },
  };
}

export function createLocalizedPageMetadata({
  title,
  description,
  path,
  locale,
  availableLocales = publishedLocales,
}: Readonly<{
  title: string;
  description: string;
  path: PublicPagePath;
  locale: Locale;
  availableLocales?: readonly Locale[];
}>): Metadata {
  const fullTitle = getPageTitle(title);
  const canonical = getLocalizedPath(locale, path);
  const languages = Object.fromEntries(
    availableLocales.map((availableLocale) => [
      localeConfig[availableLocale].htmlLanguage,
      getLocalizedPath(availableLocale, path),
    ]),
  );

  if (availableLocales.includes(defaultLocale)) {
    languages["x-default"] = getLocalizedPath(defaultLocale, path);
  }

  return {
    metadataBase: new URL(site.url),
    title: { absolute: fullTitle },
    description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: localeConfig[locale].openGraphLocale,
      alternateLocale: availableLocales
        .filter((availableLocale) => availableLocale !== locale)
        .map(
          (availableLocale) =>
            localeConfig[availableLocale].openGraphLocale,
        ),
      title: fullTitle,
      description,
      url: canonical,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [socialImage],
    },
  };
}
