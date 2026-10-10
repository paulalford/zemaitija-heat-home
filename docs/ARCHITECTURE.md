# Technical Architecture

## Request and Rendering Flow

```text
Browser
  |
Next.js App Router
  |
Locale route (/lt/* or /en/*)
  |
Locale-owned content module
  |
Shared page renderer and site shell
  |
Server Action when interaction requires server work
```

The application uses two explicit route trees under `app/(lithuanian)/lt` and `app/(english)/en`. Route groups allow independent root layouts and correct document languages without adding segments to the public URL. Route entries re-export or invoke locale-owned page modules; shared components own the rendered structure.

## Locale and Content Architecture

`lib/i18n.ts` is the central routing contract. It defines supported and published locales, Lithuanian as the default, public page paths, navigation labels and localized-path helpers.

Approved prose and interface labels live under `content/lt` and `content/en`. Locale-neutral content types define the contracts passed into shared components. `components/site-shell.tsx` selects localized header, footer and structured-data content and supplies the common page landmarks.

The root redirects to `/lt`. Legacy unprefixed service paths redirect to `/en/...` for backward compatibility. Both redirect types preserve query strings through Next.js path redirects.

## Query Parameter Flow

```text
Service CTA or checker result
  |
service / enquiry / location query
  |
lib/contact-query.ts
  |-- validates known service values
  |-- maps enquiry URL values to form values
  |-- normalizes property location
  |
Contact page prefill
  |
Editable form fields
```

Contact language switching uses the same query-preservation helper. Only valid `service`, `enquiry` and normalized `location` values cross into the equivalent locale route.

## Contact Action

`lib/contact-action.ts` receives native `FormData` through a Server Action. It selects localized validation content from the submitted locale, validates field presence, lengths, formats, allowed option values and consent, then returns typed field errors and preserved values.

The Client Component moves focus to the first invalid field or to the success status. The successful demonstration branch does not send or store data. A future delivery provider can be added after validation without changing the public form contract.

## Service-Area Action

`lib/service-area-action.ts` normalizes the submitted location, calls the server-side Nominatim adapter and calculates Haversine distance from the configured Šiauliai coordinates. The result is classified against the 50 km normal radius and returned with locale-specific presentation text.

`lib/geocoding/nominatim.ts` restricts lookup to Lithuania and validates the external response. Network, response and no-result failures converge on the unresolved user state. The browser receives the outcome rather than owning the external API request.

## Metadata Generation

`lib/metadata.ts` creates locale-specific titles, canonicals, language alternatives, Open Graph locale data and social images. Page content modules provide approved titles and descriptions. Each localized public page declares `lt`, `en` and Lithuanian `x-default` relationships.

The two root layouts set the correct `lang` attribute and locale-level site metadata. Localized 404 modules retain their language and social metadata while preventing indexing.

## Sitemap Generation

`app/sitemap.ts` passes every public page path and its published locales to the shared sitemap builder. It emits both localized URLs with reciprocal language alternates and Lithuanian `x-default`. `app/robots.ts` allows public crawling and identifies the production sitemap and host.

## Client and Server Boundaries

Most page structure and content renders on the server. Client code is limited to behavior requiring browser state or focus management:

- Responsive menu state and current pathname
- Query-aware Contact language switching
- Contact form action state and focus handling
- Service-area input state and live result display

This keeps the architecture direct and avoids UI, state-management and runtime internationalization dependencies.

