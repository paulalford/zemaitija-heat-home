import type { MetadataRoute } from "next";
import { publicPagePaths, publishedLocales } from "@/lib/i18n";
import { createLocalizedSitemap } from "@/lib/sitemap";

export default function sitemap(): MetadataRoute.Sitemap {
  return createLocalizedSitemap(
    publicPagePaths.map((path) => ({ path, locales: publishedLocales })),
  );
}
