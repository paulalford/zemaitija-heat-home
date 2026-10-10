# Multilingual architecture

The App Router has separate locale trees for English and Lithuanian without an
internationalisation dependency.

## Publication state

`lib/i18n.ts` defines and publishes `lt` and `en`, with Lithuanian as the
default. Both language trees use explicit locale-prefixed URLs.

`content/lt/content-status.ts` records the translation status for shared site
chrome and every public page. Batch 1 provides approved Lithuanian shared
chrome and homepage content. Batch 2 adds approved Heating and Heat Pumps
content. Batch 3 adds approved Plumbing and Emergency Repairs content. Batch 4
adds approved Service Area, checker and About content. The final translation
batch adds approved Contact, form validation and 404 content. Every Lithuanian
content entry is marked `translated-published`.

## Route trees and document language

Route groups provide independent root layouts:

- `app/(english)/en` renders the published English site with `lang="en"`.
- `app/(lithuanian)/lt` renders the published Lithuanian site with `lang="lt"`.
- `components/home-page.tsx` owns the locale-neutral homepage structure.
  `content/en/home.ts` and `content/lt/home.ts` provide the approved locale
  content without duplicating the rendered page layout.
- Locale-neutral page components own the Heating, Heat Pumps, Plumbing,
  Emergency Repairs, Service Area, About and Contact structures. Their English
  and Lithuanian content modules supply approved copy and locale-specific
  metadata without duplicating the rendered layouts.
- `content/en/pages` and `content/lt/pages` contain the approved page
  implementations used by their locale route entries.

English locale route files re-export those approved modules, so the content and
interactive implementations have one source rather than duplicated copies or
legacy page builds. All English internal navigation points directly to `/en`.

## Legacy redirects and the default locale

Legacy English deep links redirect permanently to their `/en` equivalents.
Next.js preserves query strings on these path-only redirects, including Contact
context.

The root redirect is controlled by `publishedLocales` and targets `/lt`.

## Navigation and language switching

Header and footer links are generated from the active locale.

`components/language-switcher.tsx` uses normal links and shows `LT | EN`. It
maps to the equivalent page and indicates the active language with
`aria-current`.

On Contact, the switcher carries only validated `service`, `enquiry` and
`location` parameters. `lib/contact-query.ts` is also used by the Contact page,
keeping the preselection contract identical between locales.

## Contact and service area

The English Contact route and prepared Lithuanian Contact module use the same
query parser, stable parameter values, form renderer and validation action.
Locale-specific labels and validation messages do not alter stored values or
the demonstration-only submission behaviour.

The service-area checker keeps its server action, Nominatim lookup, Haversine
calculation and OpenStreetMap attribution. Locale-specific checker labels and
result messages are selected without changing the lookup or distance logic,
and its locale prop preserves the correct Contact path and checked location.

## Metadata and discovery

English and Lithuanian pages use locale-specific canonicals and declare both
language alternates plus Lithuanian `x-default`.

`createLocalizedPageMetadata` emits canonical, Open Graph locale and language
alternates from an explicit availability list. It adds `x-default` only when
the default Lithuanian version exists. The sitemap follows the same per-route
availability model and contains both locale URLs, their alternates and
Lithuanian `x-default`.

## Not-found handling

English routes reuse the shared English not-found presentation. Lithuanian
routes use the approved Lithuanian 404 content and localized navigation.
