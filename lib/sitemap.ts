import type { MetadataRoute } from "next";
import {
  defaultLocale,
  getLocalizedPath,
  localeConfig,
  type Locale,
  type PublicPagePath,
} from "@/lib/i18n";
import { site } from "@/lib/site";

export type LocalizedRouteAvailability = Readonly<{
  path: PublicPagePath;
  locales: readonly Locale[];
}>;

export function createLocalizedSitemap(
  routes: readonly LocalizedRouteAvailability[],
): MetadataRoute.Sitemap {
  return routes.flatMap(({ path, locales }) => {
    const languages = Object.fromEntries(
      locales.map((locale) => [
        localeConfig[locale].htmlLanguage,
        new URL(getLocalizedPath(locale, path), site.url).toString(),
      ]),
    );

    if (locales.includes(defaultLocale)) {
      languages["x-default"] = new URL(
        getLocalizedPath(defaultLocale, path),
        site.url,
      ).toString();
    }

    return locales.map((locale) => ({
      url: new URL(getLocalizedPath(locale, path), site.url).toString(),
      alternates: { languages },
    }));
  });
}
