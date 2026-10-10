import type { PublicPagePath } from "@/lib/i18n";

type LithuanianContentStatus =
  | "translated-unpublished"
  | "awaiting-approved-translation";

export const lithuanianSharedContentStatus = {
  siteChrome: "translated-unpublished",
} as const satisfies Record<"siteChrome", LithuanianContentStatus>;

export const lithuanianContentStatus = {
  "/": "translated-unpublished",
  "/heating": "awaiting-approved-translation",
  "/heat-pumps": "awaiting-approved-translation",
  "/plumbing": "awaiting-approved-translation",
  "/emergency-repairs": "awaiting-approved-translation",
  "/service-area": "awaiting-approved-translation",
  "/about": "awaiting-approved-translation",
  "/contact": "awaiting-approved-translation",
} as const satisfies Record<PublicPagePath, LithuanianContentStatus>;
