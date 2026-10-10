"use client";

import { useSearchParams } from "next/navigation";
import { LanguageSwitcher } from "@/components/language-switcher";
import type { Locale } from "@/lib/i18n";

export function ContactLanguageSwitcher({
  currentLocale,
  pathname,
}: Readonly<{ currentLocale: Locale; pathname: string }>) {
  const searchParams = useSearchParams();

  return (
    <LanguageSwitcher
      currentLocale={currentLocale}
      pathname={pathname}
      searchParams={Object.fromEntries(searchParams)}
    />
  );
}
