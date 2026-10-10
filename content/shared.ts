import { englishSharedContent } from "@/content/en/shared";
import { lithuanianSharedContent } from "@/content/lt/shared";
import type { SharedSiteContent } from "@/content/shared-content";
import type { Locale } from "@/lib/i18n";

const sharedContent = {
  en: englishSharedContent,
  lt: lithuanianSharedContent,
} as const satisfies Record<Locale, SharedSiteContent>;

export function getSharedSiteContent(locale: Locale): SharedSiteContent {
  return sharedContent[locale];
}
