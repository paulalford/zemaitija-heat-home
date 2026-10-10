import type { PublicPagePath } from "@/lib/i18n";

type LithuanianContentStatus =
  | "translated-unpublished"
  | "awaiting-approved-translation";

export const lithuanianSharedContentStatus = {
  siteChrome: "translated-unpublished",
  notFound: "translated-unpublished",
} as const satisfies Record<
  "siteChrome" | "notFound",
  LithuanianContentStatus
>;

export const lithuanianContentStatus = {
  "/": "translated-unpublished",
  "/heating": "translated-unpublished",
  "/heat-pumps": "translated-unpublished",
  "/plumbing": "translated-unpublished",
  "/emergency-repairs": "translated-unpublished",
  "/service-area": "translated-unpublished",
  "/about": "translated-unpublished",
  "/contact": "translated-unpublished",
} as const satisfies Record<PublicPagePath, LithuanianContentStatus>;
