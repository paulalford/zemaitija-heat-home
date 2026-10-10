export const supportedLocales = ["lt", "en"] as const;

export type Locale = (typeof supportedLocales)[number];

export const defaultLocale: Locale = "lt";

// The currently published, unprefixed site is English. Keep this separate from
// defaultLocale until the translated route tree is ready to launch.
export const legacyContentLocale: Locale = "en";

// Add "lt" only after every Lithuanian route, shared label and metadata value
// has an approved translation. Redirects and discovery use this publication
// gate so incomplete locale content cannot be exposed accidentally.
export const publishedLocales = ["en"] as const satisfies readonly Locale[];

export function isPublishedLocale(locale: Locale) {
  return publishedLocales.some((publishedLocale) => publishedLocale === locale);
}

export const localeConfig = {
  lt: {
    htmlLanguage: "lt",
    openGraphLocale: "lt_LT",
    switcherLabel: "LT",
  },
  en: {
    htmlLanguage: "en",
    openGraphLocale: "en_GB",
    switcherLabel: "EN",
  },
} as const satisfies Record<Locale, {
  htmlLanguage: string;
  openGraphLocale: string;
  switcherLabel: string;
}>;

export function isLocale(value: string): value is Locale {
  return supportedLocales.some((locale) => locale === value);
}

export const publicPagePaths = [
  "/",
  "/heating",
  "/heat-pumps",
  "/plumbing",
  "/emergency-repairs",
  "/service-area",
  "/about",
  "/contact",
] as const;

export type PublicPagePath = (typeof publicPagePaths)[number];

export function getPathLocale(pathname: string): Locale | undefined {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return firstSegment && isLocale(firstSegment) ? firstSegment : undefined;
}

export function removeLocaleFromPath(pathname: string) {
  const locale = getPathLocale(pathname);

  if (!locale) {
    return pathname || "/";
  }

  const unprefixedPath = pathname.slice(locale.length + 1);
  return unprefixedPath || "/";
}

export function getLocalizedPath(locale: Locale, pathname: string) {
  const unprefixedPath = removeLocaleFromPath(
    pathname.startsWith("/") ? pathname : `/${pathname}`,
  );

  return unprefixedPath === "/"
    ? `/${locale}`
    : `/${locale}${unprefixedPath}`;
}

type NavigationKey =
  | "home"
  | "heating"
  | "heatPumps"
  | "plumbing"
  | "emergencyRepairs"
  | "serviceArea"
  | "about"
  | "contact";

type NavigationGroup = "main" | "services";

const navigationItems = [
  { key: "home", path: "/", group: "main" },
  { key: "heating", path: "/heating", group: "services" },
  { key: "heatPumps", path: "/heat-pumps", group: "services" },
  { key: "plumbing", path: "/plumbing", group: "services" },
  {
    key: "emergencyRepairs",
    path: "/emergency-repairs",
    group: "services",
  },
  { key: "serviceArea", path: "/service-area", group: "main" },
  { key: "about", path: "/about", group: "main" },
  { key: "contact", path: "/contact", group: "main" },
] as const satisfies readonly {
  key: NavigationKey;
  path: PublicPagePath;
  group: NavigationGroup;
}[];

// Add Lithuanian labels only when the approved translations are available.
// Keeping this partial prevents untranslated navigation from being published.
export const navigationLabels = {
  en: {
    home: "Home",
    heating: "Heating",
    heatPumps: "Heat Pumps",
    plumbing: "Plumbing",
    emergencyRepairs: "Emergency Repairs",
    serviceArea: "Service Area",
    about: "About",
    contact: "Contact",
  },
} as const satisfies Partial<Record<Locale, Record<NavigationKey, string>>>;

export function hasNavigationLabels(
  locale: Locale,
): locale is keyof typeof navigationLabels {
  return locale in navigationLabels;
}

export function getNavigationLinks(
  locale: Locale,
  options: Readonly<{ localized?: boolean }> = {},
) {
  if (!hasNavigationLabels(locale)) {
    throw new Error(`Navigation labels are not available for locale: ${locale}`);
  }

  const { localized = true } = options;
  const labels = navigationLabels[locale];

  return navigationItems.map(({ key, path, group }) => ({
    href: localized ? getLocalizedPath(locale, path) : path,
    label: labels[key],
    group,
  }));
}
