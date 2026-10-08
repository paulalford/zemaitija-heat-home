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

## Shared foundation

- `app/layout.tsx` supplies the header, main landmark, skip link and footer to every route. The homepage includes services, heat pumps, trust factors, process, coverage and enquiry sections. `/heating`, `/heat-pumps`, `/plumbing` and `/emergency-repairs` provide complete service pages; the remaining routes currently contain minimal shells.
- `lib/site.ts` keeps navigation and brief-derived project information together so the header and footer stay consistent.
- `components/site-header.tsx` is the only custom Client Component. Its mobile menu uses an in-flow disclosure to retain normal keyboard navigation. Escape closes the menu and returns focus to its button; choosing a navigation link closes it. The pathname identifies the current page.
- The footer and page shell remain Server Components to minimise browser JavaScript.
- The homepage is also a Server Component. Its service, trust and process lists are rendered from local content arrays, with no additional browser JavaScript or image dependencies. Enquiry links lead to the contact route; that page and its form remain to be developed.
- `components/service-page.tsx` supplies a service hero with an optional secondary action, labelled section and closing enquiry CTA. Service-specific copy and lists stay in the route so later service pages can use the same structure without a page configuration system. `components/service-process.tsx` supplies the default four enquiry steps and accepts service-specific steps. All remain Server Components.
- `/heat-pumps` focuses on suitability and assessment, using a definition list, a preparation checklist and five process steps. Its scoped styles keep the process vertical beside the introduction without changing the homepage or Heating layouts. Metadata follows the existing local title and Open Graph pattern; canonical URLs await a verified deployment domain.
- `/plumbing` groups practical repair and alteration services, connects common call reasons with emergency information, and explains planned work without adding client-side JavaScript. Its hero uses the shared optional secondary action to link directly to Emergency Repairs.
- `/emergency-repairs` uses a compact, page-specific hero, an early information checklist, restrained safety guidance and a prominent final contact block. This hierarchy gives urgent enquiries a quicker route to action than the standard service-page structure without promising availability or response times.
- `app/globals.css` exposes colours and system typography through Tailwind theme variables, with shared spacing, page width, buttons, links and focus styles. System fonts avoid an external font dependency.

Read [the project instructions](AGENTS.md) and [the project brief](docs/PROJECT_BRIEF.md) before making substantial changes.
