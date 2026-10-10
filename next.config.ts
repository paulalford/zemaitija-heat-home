import type { NextConfig } from "next";
import {
  defaultLocale,
  isPublishedLocale,
  legacyContentLocale,
} from "./lib/i18n";

const defaultPublishedLocale = isPublishedLocale(defaultLocale)
  ? defaultLocale
  : legacyContentLocale;

const legacyEnglishPaths = [
  "/heating",
  "/heat-pumps",
  "/plumbing",
  "/emergency-repairs",
  "/service-area",
  "/about",
  "/contact",
] as const;

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: `/${defaultPublishedLocale}`,
        permanent: false,
      },
      ...legacyEnglishPaths.map((path) => ({
        source: path,
        destination: `/${legacyContentLocale}${path}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
