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

- `app/layout.tsx` supplies the header, main landmark, skip link and footer to every route. The homepage includes services, heat pumps, trust factors, process, coverage and enquiry sections; other routes currently contain minimal shells.
- `lib/site.ts` keeps navigation and brief-derived project information together so the header and footer stay consistent.
- `components/site-header.tsx` is the only custom Client Component. Its mobile menu uses an in-flow disclosure to retain normal keyboard navigation. Escape closes the menu and returns focus to its button; choosing a navigation link closes it. The pathname identifies the current page.
- The footer and page shell remain Server Components to minimise browser JavaScript.
- The homepage is also a Server Component. Its service, trust and process lists are rendered from local content arrays, with no additional browser JavaScript or image dependencies. Enquiry links lead to the contact route; that page and its form remain to be developed.
- `app/globals.css` exposes colours and system typography through Tailwind theme variables, with shared spacing, page width, buttons, links and focus styles. System fonts avoid an external font dependency.

Read [the project instructions](AGENTS.md) and [the project brief](docs/PROJECT_BRIEF.md) before making substantial changes.
