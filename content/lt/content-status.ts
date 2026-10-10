import type { PublicPagePath } from "@/lib/i18n";

type LithuanianContentStatus =
  | "translated-published"
  | "awaiting-approved-translation";

export const lithuanianSharedContentStatus = {
  siteChrome: "translated-published",
  notFound: "translated-published",
} as const satisfies Record<
  "siteChrome" | "notFound",
  LithuanianContentStatus
>;

export const lithuanianContentStatus = {
  "/": "translated-published",
  "/heating": "translated-published",
  "/heat-pumps": "translated-published",
  "/plumbing": "translated-published",
  "/emergency-repairs": "translated-published",
  "/service-area": "translated-published",
  "/about": "translated-published",
  "/contact": "translated-published",
} as const satisfies Record<PublicPagePath, LithuanianContentStatus>;
