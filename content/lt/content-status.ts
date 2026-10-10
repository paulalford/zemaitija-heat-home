import type { PublicPagePath } from "@/lib/i18n";

type LithuanianContentStatus =
  | "translated-unpublished"
  | "awaiting-approved-translation";

export const lithuanianSharedContentStatus = {
  siteChrome: "translated-unpublished",
} as const satisfies Record<"siteChrome", LithuanianContentStatus>;

export const lithuanianContentStatus = {
  "/": "translated-unpublished",
  "/heating": "translated-unpublished",
  "/heat-pumps": "translated-unpublished",
  "/plumbing": "translated-unpublished",
  "/emergency-repairs": "translated-unpublished",
  "/service-area": "translated-unpublished",
  "/about": "translated-unpublished",
  "/contact": "awaiting-approved-translation",
} as const satisfies Record<PublicPagePath, LithuanianContentStatus>;
