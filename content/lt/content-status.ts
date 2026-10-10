import type { PublicPagePath } from "@/lib/i18n";

export const lithuanianContentStatus = {
  "/": "awaiting-approved-translation",
  "/heating": "awaiting-approved-translation",
  "/heat-pumps": "awaiting-approved-translation",
  "/plumbing": "awaiting-approved-translation",
  "/emergency-repairs": "awaiting-approved-translation",
  "/service-area": "awaiting-approved-translation",
  "/about": "awaiting-approved-translation",
  "/contact": "awaiting-approved-translation",
} as const satisfies Record<PublicPagePath, "awaiting-approved-translation">;
