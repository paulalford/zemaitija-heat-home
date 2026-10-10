# Portfolio Summary

**Project:** Žemaitija Heat & Home

**Type:** Commercial-style bilingual small-business website

**Role:** Independent design, development and implementation

**Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Next.js App Router and Server Actions, OpenStreetMap Nominatim, Vercel, Git and GitHub

**Problem:** A fictional regional heating and plumbing business needs a credible mobile-first presence that clarifies services, urgent versus planned work and an approximate 50 km normal service area. The experience must support Lithuanian and English visitors and collect useful enquiry context without relying on invented social proof.

**Solution:** A production-deployed eight-page site in both languages, using shared page renderers and locale-owned content. Contextual links preselect Contact details, while a server-side geocoding tool provides advisory service-area guidance and carries checked locations into the enquiry flow.

**Key features:**

- Lithuanian-first `/lt` and secondary `/en` route trees
- Equivalent-page `LT | EN` switching
- Contextual service, enquiry and location prefill
- Server-side service-area checker with inside, outside and unresolved states
- Accessible, localized Contact validation
- Localized 404 pages
- Responsive layouts tested from 280px through desktop
- Clear demonstration-only form disclosure

**Technical highlights:**

- Typed locale content with locale-neutral renderers
- Centralized route, navigation and publication configuration
- Localized canonical, hreflang, `x-default` and Open Graph metadata
- Bilingual sitemap and robots configuration
- Server Actions for validation and geocoding workflow
- Validated query preservation across languages
- Haversine distance calculation from a Šiauliai reference point
- Minimal dependencies and narrowly scoped client-side JavaScript

**Portfolio skills demonstrated:** Requirements interpretation, commercial UX decisions, responsive frontend development, Next.js architecture, TypeScript, multilingual UX, accessibility, local SEO, server-side validation, third-party API integration, production QA and deployment.

**Live URL:** [https://zemaitija-heat-home.vercel.app/](https://zemaitija-heat-home.vercel.app/)

**Repository:** [https://github.com/paulalford/zemaitija-heat-home](https://github.com/paulalford/zemaitija-heat-home)

**Disclosure:** This is an independently developed commercial-style portfolio case study based on a fictional business brief. It does not represent paid client work.

