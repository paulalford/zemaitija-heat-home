import Link from "next/link";
import { getSharedSiteContent } from "@/content/shared";
import {
  getPreservedContactQuery,
  type ContactSearchParams,
} from "@/lib/contact-query";
import {
  getLocalizedPath,
  localeConfig,
  publishedLocales,
  removeLocaleFromPath,
  type Locale,
} from "@/lib/i18n";

type LanguageSwitcherProps = Readonly<{
  currentLocale: Locale;
  pathname: string;
  searchParams?: ContactSearchParams;
  availableLocales?: readonly Locale[];
  ariaLabel?: string;
}>;

export function LanguageSwitcher({
  currentLocale,
  pathname,
  searchParams,
  availableLocales = publishedLocales,
  ariaLabel,
}: LanguageSwitcherProps) {
  const content = getSharedSiteContent(currentLocale);
  const pagePath = removeLocaleFromPath(pathname);
  const query =
    pagePath === "/contact" ? getPreservedContactQuery(searchParams) : {};
  const hasQuery = Object.keys(query).length > 0;

  return (
    <nav
      className="language-switcher"
      aria-label={ariaLabel ?? content.accessibility.languageSwitcher}
    >
      <ul>
        {availableLocales.map((locale, index) => {
          const localizedPath = getLocalizedPath(locale, pagePath);
          const href = hasQuery
            ? { pathname: localizedPath, query }
            : localizedPath;

          return (
            <li key={locale}>
              {index > 0 && (
                <span className="language-switcher-separator" aria-hidden="true">
                  |
                </span>
              )}
              <Link
                href={href}
                hrefLang={localeConfig[locale].htmlLanguage}
                lang={localeConfig[locale].htmlLanguage}
                aria-current={locale === currentLocale ? "page" : undefined}
              >
                {localeConfig[locale].switcherLabel}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
