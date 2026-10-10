import Link from "next/link";
import {
  getPreservedContactQuery,
  type ContactSearchParams,
} from "@/lib/contact-query";
import {
  getLocalizedPath,
  localeConfig,
  removeLocaleFromPath,
  supportedLocales,
  type Locale,
} from "@/lib/i18n";

type LanguageSwitcherProps = Readonly<{
  currentLocale: Locale;
  pathname: string;
  searchParams?: ContactSearchParams;
  availableLocales?: readonly Locale[];
}>;

export function LanguageSwitcher({
  currentLocale,
  pathname,
  searchParams = {},
  availableLocales = supportedLocales,
}: LanguageSwitcherProps) {
  const pagePath = removeLocaleFromPath(pathname);
  const query =
    pagePath === "/contact" ? getPreservedContactQuery(searchParams) : {};
  const hasQuery = Object.keys(query).length > 0;

  return (
    <nav className="language-switcher" aria-label="Language">
      <ul>
        {availableLocales.map((locale) => {
          const localizedPath = getLocalizedPath(locale, pagePath);
          const href = hasQuery
            ? { pathname: localizedPath, query }
            : localizedPath;

          return (
            <li key={locale}>
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
