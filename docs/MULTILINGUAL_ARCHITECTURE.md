# Multilingual architecture

The App Router has separate locale trees for English and Lithuanian without an
internationalisation dependency.

## Publication state

`lib/i18n.ts` defines `lt` and `en`, with Lithuanian as the intended default.
Its `publishedLocales` list currently contains only `en`. This is a deliberate
publication gate: `/lt` route modules exist, but return HTTP 404 and render no
English fallback or placeholder copy. They are also excluded from navigation,
language switching, metadata alternates and the sitemap.

`content/lt/content-status.ts` records the translation status for shared site
chrome and every public page. Batch 1 provides approved Lithuanian shared
chrome and homepage content. Batch 2 adds approved Heating and Heat Pumps
content. Batch 3 adds approved Plumbing and Emergency Repairs content. Batch 4
adds approved Service Area, checker and About content. The final translation
batch adds approved Contact, form validation and 404 content. Every Lithuanian
content entry is now marked `translated-unpublished`; publication remains a
separate step, so `lt` must not be added to `publishedLocales` yet.

## Route trees and document language

Route groups provide independent root layouts:

- `app/(english)/en` renders the published English site with `lang="en"`.
- `app/(lithuanian)/lt` owns the complete Lithuanian route structure and has a
  root layout ready to use `lang="lt"` when translated pages are activated.
  Until then, its empty 404 responses declare `Content-Language: lt` and expose
  no page or interface copy. Prepared Lithuanian service-page modules remain
  disconnected from these route handlers.
- `components/home-page.tsx` owns the locale-neutral homepage structure.
  `content/en/home.ts` and `content/lt/home.ts` provide the approved locale
  content without duplicating the rendered page layout.
- Locale-neutral page components own the Heating, Heat Pumps, Plumbing,
  Emergency Repairs, Service Area, About and Contact structures. Their English
  and Lithuanian content modules supply approved copy and locale-specific
  metadata without duplicating the rendered layouts.
- `content/en/pages` contains the approved English page implementations used by
  the locale route entries. The prepared Lithuanian homepage module remains
  disconnected from the route tree while the locale is unpublished.

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

Header and footer links are generated from the active locale. Approved
Lithuanian Batch 1 labels are stored separately under `content/lt`, but the
Lithuanian shell is not mounted by any public page while the locale remains
unpublished.

`components/language-switcher.tsx` is a Server Component made from normal
links. Its default choices come from `publishedLocales`, so it currently offers
only English and remains unmounted. Once Lithuanian content is published, it can
show `LT | EN`, map to the equivalent page and indicate the active language with
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

English pages use locale-specific canonicals under `/en` and declare only the
published English alternate. Prepared Lithuanian homepage metadata and social
image content are not connected to a public route, so no published metadata
points to an incomplete Lithuanian page.

`createLocalizedPageMetadata` emits canonical, Open Graph locale and language
alternates from an explicit availability list. It adds `x-default` only when
the default Lithuanian version exists. The sitemap follows the same per-route
availability model and currently contains only `/en` URLs. Publishing `lt` for
a route adds both locale URLs, their alternates and Lithuanian `x-default`.

## Not-found handling

English routes reuse the shared English not-found presentation. Approved
Lithuanian 404 content and localized navigation are prepared separately, while
the unpublished Lithuanian tree retains its no-content 404 boundary so no copy
is exposed under `/lt` before publication.
