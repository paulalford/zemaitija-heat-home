# Multilingual architecture

The App Router has separate locale trees for English and Lithuanian without an
internationalisation dependency.

## Publication state

`lib/i18n.ts` defines `lt` and `en`, with Lithuanian as the intended default.
Its `publishedLocales` list currently contains only `en`. This is a deliberate
publication gate: `/lt` route modules exist, but return HTTP 404 and render no
English fallback or placeholder copy. They are also excluded from navigation,
language switching, metadata alternates and the sitemap.

`content/lt/content-status.ts` records the translation status for every public
page. Add approved Lithuanian page content, navigation and shared-interface
labels before adding `lt` to `publishedLocales`.

## Route trees and document language

Route groups provide independent root layouts:

- `app/(english)/en` renders the published English site with `lang="en"`.
- `app/(lithuanian)/lt` owns the complete Lithuanian route structure and has a
  root layout ready to use `lang="lt"` when translated pages are activated.
  Until then, its empty 404 responses declare `Content-Language: lt` and expose
  no page or interface copy.
- `content/en/pages` contains the approved English page implementations used by
  the locale route entries.

English locale route files re-export those approved modules, so the content and
interactive implementations have one source rather than duplicated copies or
legacy page builds. All English internal navigation points directly to `/en`.

## Legacy redirects and the default locale

Legacy English deep links redirect permanently to their `/en` equivalents.
Next.js preserves query strings on these path-only redirects, including Contact
context.

The root redirect is controlled by `publishedLocales`. It currently targets
`/en` so the public homepage remains usable while `/lt` has no approved content.
As soon as `lt` is published, the same configuration automatically changes `/`
to `/lt`, making Lithuanian the live default without another routing rewrite.

## Navigation and language switching

Header and footer links are generated from the active locale. Lithuanian labels
are intentionally absent, which prevents an untranslated shell from rendering.

`components/language-switcher.tsx` is a Server Component made from normal
links. Its default choices come from `publishedLocales`, so it currently offers
only English and remains unmounted. Once Lithuanian content is published, it can
show `LT | EN`, map to the equivalent page and indicate the active language with
`aria-current`.

On Contact, the switcher carries only validated `service`, `enquiry` and
`location` parameters. `lib/contact-query.ts` is also used by the Contact page,
keeping the preselection contract identical between locales.

## Contact and service area

The English Contact route retains contextual form preselection. A translated
Lithuanian Contact page should use the same query parser and stable parameter
values.

The service-area checker keeps its server action, Nominatim lookup, Haversine
calculation and OpenStreetMap attribution. Its locale prop now sends English
enquiries directly to `/en/contact`; the future Lithuanian page will pass `lt`.

## Metadata and discovery

English pages use locale-specific canonicals under `/en` and declare only the
published English alternate. No metadata points to an incomplete Lithuanian
page.

`createLocalizedPageMetadata` emits canonical, Open Graph locale and language
alternates from an explicit availability list. It adds `x-default` only when
the default Lithuanian version exists. The sitemap follows the same per-route
availability model and currently contains only `/en` URLs. Publishing `lt` for
a route adds both locale URLs, their alternates and Lithuanian `x-default`.

## Not-found handling

English routes reuse the shared English not-found presentation. The dormant
Lithuanian tree has its own no-content 404 boundary, preventing English fallback
copy under `/lt`. Approved Lithuanian 404 copy and localized navigation should
replace that boundary when Lithuanian is activated.
