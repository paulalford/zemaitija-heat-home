import type { MetadataRoute } from "next";
import { publicPagePaths } from "@/lib/i18n";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPagePaths.map((path) => ({
    url: new URL(path, site.url).toString(),
  }));
}
