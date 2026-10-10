# Multilingual architecture

The current public site remains English on its original, unprefixed URLs. The
locale foundation is deliberately dormant so untranslated Lithuanian pages and
language links are not exposed.

## Locale and route foundation

`lib/i18n.ts` defines `lt` and `en`, with Lithuanian as the eventual default.
It also owns public page paths, locale validation, prefix generation and the
navigation item/label structure. Only approved English navigation labels exist
at this stage; requesting Lithuanian navigation labels fails rather than
silently falling back to English.

When translations are ready, move the public page tree into an `app/[locale]`
dynamic segment. At the cutover, move the document layout into that segment as
its root layout so it receives the locale and can set `<html lang>` correctly;
do not merely nest it below today's root document layout. The locale layout
should:

1. validates `params.locale` and calls `notFound()` for unsupported values;
2. set the document language for the locale;
3. renders locale-specific header, footer and page content;
4. uses `generateStaticParams()` for `lt` and `en`;
5. passes the active locale to locale-aware shared components.

Do not add that route segment page-by-page. Publish each equivalent route only
when its content, navigation and metadata are complete. At launch, decide and
document redirects from the current English URLs (framework redirects can keep
those redirects outside the localized page tree). Lithuanian can then become
the default customer-facing destination without silently changing today's URLs
during this foundation stage.

## Navigation and language switching

`components/language-switcher.tsx` is a Server Component made only from normal
links. It maps the current route to the same path under another locale. It is
not rendered by the current layout because `/lt` and `/en` pages do not yet
exist.

On Contact, the switcher carries only validated `service`, `enquiry` and
`location` query parameters. `lib/contact-query.ts` is shared by the current
Contact page and the future switcher, so the existing form-prefill contract is
also the locale-route contract.

The service-area checker accepts an optional locale and uses it to build the
Contact destination. The current page omits that prop and therefore retains
its existing `/contact?location=...` behaviour. A future localized page should
render `<ServiceAreaChecker locale={locale} />`.

## Metadata and discovery

Existing pages continue to use `createPageMetadata`, preserving their current
canonical URLs and English Open Graph locale. Future locale pages should use
`createLocalizedPageMetadata`. Its `availableLocales` argument must include
only translations that actually exist for that page. Canonical, `hreflang`
and Open Graph locale values are then generated from the same route config.
`x-default` is emitted only when the default Lithuanian version is in that
explicit availability list.

The current sitemap intentionally lists only the published unprefixed English
URLs. `createLocalizedSitemap` supports per-route locale availability and adds
alternates only for the versions declared to exist. Replace the legacy sitemap
mapping only when prefixed routes are published. `robots.ts` needs no route
change; it will continue to advertise the single sitemap URL.

## Not-found handling

`components/not-found-page.tsx` keeps the presentation shared while accepting
its copy and navigation as props. The current root not-found file supplies the
existing English values. Future locale not-found files can reuse the component
with translated copy and localized links, without duplicating the layout.
