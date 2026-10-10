# Žemaitija Heat & Home

An independently developed commercial-style portfolio case study based on a realistic small-business brief. The company is fictional.

## Development

Use Node.js 20.9 or newer and npm.

```sh
npm ci
npm run dev
```

## Verification

```sh
npm run lint
npm run typecheck
npm run build
```

If an execution environment blocks Turbopack's local worker ports, the supported alternative production build is `npm run build -- --webpack`.

## Performance

Production Lighthouse results from 8 October 2026:

| Category | Mobile | Desktop |
| --- | ---: | ---: |
| Performance | 99 | 100 |
| Accessibility | 100 | 100 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |

See the [performance record](docs/PERFORMANCE.md) for metrics and audit conditions. Lighthouse scores are laboratory measurements that can vary between runs and do not guarantee real-world performance.

## Shared foundation

- `app/(english)/en` publishes the approved English pages at locale-prefixed URLs. `app/(lithuanian)/lt` contains the matching Lithuanian route structure but returns 404 until approved translations exist. Legacy English URLs redirect to `/en`; see the [multilingual architecture](docs/MULTILINGUAL_ARCHITECTURE.md).
- `components/site-shell.tsx` supplies the header, main landmark, skip link and footer to published English routes. `lib/i18n.ts` owns locale validation, public paths, navigation structure and the locale publication gate; `lib/site.ts` keeps brief-derived business information together.
- `components/site-header.tsx` is the only custom Client Component. Its mobile menu uses an in-flow disclosure to retain normal keyboard navigation. Escape closes the menu and returns focus to its button; choosing a navigation link closes it. The pathname identifies the current page.
- The footer and page shell remain Server Components to minimise browser JavaScript.
- The homepage is also a Server Component. Its service, trust and process lists are rendered from local content arrays, with no additional browser JavaScript or image dependencies. Enquiry links lead to the contact route.
- `components/service-page.tsx` supplies a service hero with an optional secondary action, labelled section and closing enquiry CTA. Service-specific copy and lists stay in the route so later service pages can use the same structure without a page configuration system. `components/service-process.tsx` supplies the default four enquiry steps and accepts service-specific steps. All remain Server Components.
- `/en/heat-pumps` focuses on suitability and assessment, using a definition list, a preparation checklist and five process steps. Its scoped styles keep the process vertical beside the introduction without changing the homepage or Heating layouts.
- `/en/plumbing` groups practical repair and alteration services, connects common call reasons with emergency information, and explains planned work without adding client-side JavaScript. Its hero uses the shared optional secondary action to link directly to Emergency Repairs.
- `/en/emergency-repairs` uses a compact, page-specific hero, an early information checklist, restrained safety guidance and a prominent final contact block. This hierarchy gives urgent enquiries a quicker route to action than the standard service-page structure without promising availability or response times.
- `/en/service-area` uses an accessible, CSS-only radius illustration to show Šiauliai as the reference point without implying a precise geographic boundary. Its content explains how coverage is checked and connects the shared region to every core service.
- `/en/about` builds credibility through residential scope, concrete working principles, a five-step enquiry process and verified local coverage. Its editorial layouts avoid unsupported history, staff profiles, testimonials and performance claims while the shared footer retains the portfolio disclosure.
- `/en/contact` keeps page content in a Server Component and isolates interactive form behaviour in one Client Component. A Server Action validates native `FormData`, returns field errors and preserved values, and stops at a clearly labelled demo result. A future email-provider call can replace that final result after deployment without changing the form fields or validation flow.
- `app/globals.css` exposes colours and system typography through Tailwind theme variables, with shared spacing, page width, buttons, links and focus styles. System fonts avoid an external font dependency.

Read [the project instructions](AGENTS.md) and [the project brief](docs/PROJECT_BRIEF.md) before making substantial changes.
