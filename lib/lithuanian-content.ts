import { lithuanianContentStatus } from "@/content/lt/content-status";
import type { PublicPagePath } from "@/lib/i18n";

export function createPendingLithuanianResponse(path: PublicPagePath) {
  // Reading the manifest here keeps every dormant route tied to an explicit
  // translation status rather than an English fallback or placeholder page.
  void lithuanianContentStatus[path];

  return createUnavailableLithuanianResponse();
}

export function createUnavailableLithuanianResponse() {
  return new Response(null, {
    status: 404,
    headers: {
      "Cache-Control": "no-store",
      "Content-Language": "lt",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
