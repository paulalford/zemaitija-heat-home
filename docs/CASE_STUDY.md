# Case Study: Žemaitija Heat & Home

## Context

Žemaitija Heat & Home is an independently developed commercial-style portfolio project for a fictional residential heating and plumbing company. The brief places the business in Šiauliai, serving nearby towns, villages and the wider Žemaitija region through heating, heat-pump, plumbing, maintenance and emergency-repair work.

The project was treated as a real small-business engagement: the customer journey, local-search needs, operational constraints and future maintenance burden all influenced the implementation. It is not presented as paid client work.

## Problem

A homeowner arriving from search or a referral needs to answer three questions quickly: does the company handle this type of work, does it normally cover the property location, and what should happen next? These questions become harder when planned installations, routine repairs and urgent problems are presented as one undifferentiated service.

The fictional business also needs to support Lithuanian and English visitors, establish credibility without fabricated social proof, and collect enough context to make an enquiry useful. Most visitors are likely to be on mobile devices, sometimes under time pressure or on slower connections.

## Constraints

- The company and business scenario are fictional, so testimonials, addresses, credentials and commercial outcomes could not be invented.
- Lithuanian had to be the default language while English remained fully supported.
- The first Contact implementation could validate an enquiry but could not send or store it.
- The normal service radius was approximate and could not be described as guaranteed coverage.
- Performance and accessibility had to remain strong without unnecessary dependencies or client-side JavaScript.
- The architecture needed to remain understandable for portfolio review and future maintenance.

## Research & Planning

Planning began with the decisions a residential customer needs to make rather than with a generic marketing-page template. The resulting content model separates core services, urgent help, coverage guidance, business context and enquiry completion.

The brief defined an approximately 50 km normal radius around Šiauliai. That requirement led to a real lookup tool rather than a static place-name list, but the result language was deliberately framed as guidance. The multilingual work was staged in approved translation batches, keeping incomplete Lithuanian routes out of publication until the whole experience was ready.

## Information Architecture

Eight core pages support distinct customer tasks:

- Home establishes scope, location and the main routes forward.
- Heating, Heat Pumps and Plumbing explain service-specific work.
- Emergency Repairs gives urgent problems a shorter path to enquiry.
- Service Area explains regional coverage and contains the checker.
- About builds confidence through process and scope rather than invented history.
- Contact collects the details needed to understand the request.

The same structure is available under `/lt` and `/en`. Legacy unprefixed service links remain mapped to English routes for backward compatibility, while `/` directs visitors to Lithuanian.

## UX Decisions

Service cards and calls to action use contextual links rather than sending every visitor to a blank form. Planned heat-pump work, urgent repairs and checked property locations can arrive with the relevant choices already selected. Visitors can still edit every value, keeping the form helpful rather than restrictive.

Urgent work receives distinct hierarchy and query context without unsupported response-time promises. Service-area results avoid false precision: they explain likely classification, show the calculated straight-line distance and state that final coverage is confirmed with the enquiry.

Navigation remains conventional and link-based. The locale switcher changes the current page rather than returning visitors to a language homepage, and it preserves valid Contact context.

## Visual Direction

The visual direction is practical, restrained and regionally grounded. A warm, muted palette, generous spacing and direct typography aim to feel credible for a residential trades business rather than like a technology startup. Photography is used selectively to establish service context.

Animation is deliberately limited. Hierarchy, wording and clear controls carry the experience. The disclosure remains visible without overpowering the fictional customer journey.

## Technical Architecture

The application uses Next.js 16, React, TypeScript and Tailwind CSS. Separate `/lt` and `/en` route trees select locale-owned content while shared renderers own page structure. A reusable site shell supplies navigation, landmarks, language switching and footer content.

Central locale configuration defines supported and published locales, public page paths, navigation labels and localized path creation. Shared metadata and sitemap helpers apply the same route model to canonicals, alternates, Open Graph data and discovery files.

Server Components remain the default. Client Components are reserved for the responsive menu, query-aware language switching, Contact interaction and service-area input. Server Actions handle Contact validation and location checking.

## Multilingual Strategy

The site avoids a general-purpose i18n dependency. Content belongs to explicit English and Lithuanian modules, making approved wording easy to audit. Locale-neutral components receive typed content and locale information without knowing the translated prose.

Each public page emits the correct document language, canonical URL, localized Open Graph locale, `lt` and `en` hreflang links, and Lithuanian `x-default`. The sitemap publishes both language versions with the same alternate relationships.

Translation status was tracked separately from publication. This allowed approved Lithuanian batches to exist in the repository without exposing incomplete public routes. Once every page and shared string was complete, both locales were enabled together.

## Contextual Enquiry Design

Contact understands three external query parameters:

- `service` maps known service slugs to visible service options.
- `enquiry` maps stable URL values to stored form values.
- `location` supplies a normalized property-location prefill.

Only supported service and enquiry values are retained. The same parser is used when changing language on Contact, so invalid parameters are dropped instead of being carried into the alternate locale.

The form validates on the server, returns localized field messages and preserves entered values. On failure, focus moves to the first invalid field; on success, it moves to the status region. The successful demonstration state explicitly explains that no enquiry was sent or stored.

## Service-Area Checker

The checker performs a server-side OpenStreetMap Nominatim lookup restricted to Lithuania. It calculates Haversine distance from fixed Šiauliai coordinates and compares the result with the normal 50 km radius.

This is straight-line distance, not driving distance. Results are classified as likely within or likely outside the normal area, and an unresolved state handles locations that cannot be confidently geocoded. The OpenStreetMap attribution is visible, and resolved locations can continue into the locale-correct Contact page.

Keeping the external request server-side avoids exposing lookup details to browser code and centralizes failure handling. Result updates use a polite live region.

## Accessibility

The application uses semantic headings, landmarks and navigation; a skip link; visible focus styles; keyboard-operable menus; localized labels; and current-page indicators. The mobile menu closes on Escape and returns focus to its trigger.

Contact fields have explicit labels, required and optional indicators, help text and `aria-describedby` relationships. Validation uses alert/status semantics and intentional focus movement. Service-area feedback uses `role="status"`, `aria-live="polite"` and `aria-atomic="true"`.

The project targets WCAG 2.1 AA good practice but does not claim formal certification.

## SEO

Each service and information page has localized titles, descriptions and canonical URLs. Both language versions are connected with hreflang and Lithuanian `x-default`. The implementation also supplies a bilingual sitemap, robots configuration, Open Graph data, localized social images, semantic content and organization structured data.

Local relevance comes from genuine page structure and service-area content rather than repeated keyword blocks. No non-existent business address, opening hours, review score or credential is marked up.

## Performance & QA

The design uses system fonts, optimized local imagery, Server Components where practical and narrowly scoped client interactivity. No UI, state-management or runtime localization library was added.

The production Lighthouse benchmark recorded on 8 October 2026 was:

| Category | Mobile | Desktop |
| --- | ---: | ---: |
| Performance | 99 | 100 |
| Accessibility | 100 | 100 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |

These are laboratory results and may vary. The audit conditions and supporting metrics are recorded in [PERFORMANCE.md](PERFORMANCE.md).

QA also covered linting, production builds, route smoke tests, bilingual content, Contact preselection, service-area inside/outside/unresolved results, responsive layouts from 280px through desktop, localized metadata, sitemap and robots output, 404 behavior, form validation, keyboard interaction, focus handling and live-region behavior. The repository does not claim an automated test suite.

## Key Challenges

### Preserving context between languages

A language change on Contact needed to retain useful state without preserving arbitrary parameters. A shared validation function now produces the query used by both prefill and language switching.

### Keeping incomplete translations private

Locale content and publication state were separated. Approved content could be implemented and reviewed in batches while Lithuanian routes continued to return 404 until the whole locale was complete.

### Providing real coverage guidance honestly

Geocoding plus Haversine distance creates a useful answer, but the interface consistently describes the result as likely coverage and preserves individual confirmation.

### Avoiding unnecessary localization complexity

Typed locale modules and explicit route trees provide auditability and localized metadata without adding an i18n framework to a focused two-language site.

### Fitting longer Lithuanian labels

Navigation, CTA wrapping and forms were checked at narrow widths down to 280px. The header adapts its controls instead of shortening approved copy.

## Outcome

The delivered outcome is a production-deployed bilingual website with clear service journeys, localized SEO, contextual enquiry preselection, a real service-area lookup and accessible validation behavior. Lithuanian is the primary public language, English is fully available, and equivalent pages remain connected through normal links.

This describes the implemented product, not a claimed commercial improvement. No enquiry, revenue or conversion outcome has been invented.

## What I Would Do Next

- Connect a production email or CRM provider after privacy, retention and operational requirements are agreed.
- Add automated unit and browser tests for query mapping, validation, localized routing and checker states.
- Monitor real-world Core Web Vitals after sustained production traffic.
- Review anonymized search and enquiry patterns before changing information architecture or content.
- Capture and maintain the production screenshot set described in [screenshots/README.md](screenshots/README.md).

## Portfolio Disclosure

This project is an independently developed commercial-style portfolio case study based on a fictional business brief. It does not represent paid client work, a trading company or measured client results.

