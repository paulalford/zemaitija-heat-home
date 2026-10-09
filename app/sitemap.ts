import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const publicPaths = [
  "/",
  "/heating",
  "/heat-pumps",
  "/plumbing",
  "/emergency-repairs",
  "/service-area",
  "/about",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPaths.map((path) => ({
    url: new URL(path, site.url).toString(),
  }));
}
