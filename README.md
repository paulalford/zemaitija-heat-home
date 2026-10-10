# Žemaitija Heat & Home

A bilingual commercial-style website and enquiry system for a fictional regional heating and plumbing business serving Šiauliai and the wider Žemaitija region.

This is an independently developed portfolio case study based on a realistic small-business brief. It does not represent paid client work.

## Live Demo

[View the production site](https://zemaitija-heat-home.vercel.app/)

Lithuanian is the primary language and English is the secondary language.

## Project Overview

The fictional brief describes a residential heating and plumbing company serving homeowners around Šiauliai and the wider Žemaitija region. Its services include heating installation and repair, heat pumps, plumbing, maintenance and emergency repairs. The normal service area is presented as approximately 50 km from Šiauliai, with individual confirmation required for each enquiry.

The project was developed to the standard of a production small-business website while remaining explicit about its portfolio context.

## Business Problem

A regional trades business needs more than a list of services. Prospective customers may be unsure which service fits their problem, whether urgent and planned work follow the same route, or whether their property is within the normal service area. Vague enquiries make follow-up harder, while weak mobile presentation and incomplete local-search information reduce credibility.

The brief therefore called for clear service journeys, better enquiry context, realistic service-area guidance, Lithuanian and English support, local SEO, and a credible mobile-first presence. These are requirements derived from a fictional business scenario, not measured findings from a real client.

## Objectives

- Build a credible customer-facing presence for a regional residential business.
- Encourage more useful, qualified enquiry information.
- Make services and urgent-versus-planned routes easy to understand.
- Provide complete Lithuanian and English experiences.
- Communicate the normal service area without promising exact coverage.
- Deliver an accessible, responsive interface.
- Establish a strong local and multilingual SEO structure.
- Preserve fast performance with a low-maintenance architecture.

## Solution

The result is an eight-page site in both Lithuanian and English. Shared renderers keep the two locales structurally consistent while locale-owned content, metadata and validation messages remain explicit. The site includes contextual Contact preselection, a real server-side location checker, responsive navigation, localized metadata and social images, accessible form validation, and custom localized 404 experiences.

## Key Features

### Bilingual Routing

- Explicit `/lt` and `/en` route trees, with Lithuanian as the default.
- A normal-link `LT | EN` switcher that preserves the equivalent page.
- Valid Contact query parameters remain intact when switching languages.
- Locale-specific canonicals, `lt` and `en` hreflang alternatives, and Lithuanian `x-default`.
- Correct localized document language, metadata and Open Graph locale.

### Contextual Enquiries

Service pages and the service-area checker can pass useful context into Contact through validated query parameters:

- `service` selects heating, heat pumps, plumbing or emergency repairs.
- `enquiry` selects planned work, repair, urgent work or an undecided state.
- `location` prefills the property-location field.

Examples:

```text
/lt/contact?service=heat-pumps&enquiry=planned
/lt/contact?service=plumbing&location=Kuršėnai
```

The form remains fully editable after preselection, and unsupported query values are ignored.

### Service-Area Checker

The checker sends a server-side, Lithuania-restricted request to OpenStreetMap Nominatim and calculates straight-line distance from a Šiauliai reference point using the Haversine formula. Locations are presented as likely inside or outside the normal approximately 50 km service radius; this is advisory guidance, not a coverage guarantee or road-distance calculation.

Unresolved locations receive a clear retry state. OpenStreetMap attribution remains visible, and a successfully checked location can be carried directly into Contact.

### Contact Form

- Server-side validation through a Next.js Server Action.
- Required and optional fields are clearly identified.
- Accessible field errors, summary status, descriptions and focus handling.
- Contextual service, enquiry type and property-location prefill.
- Locale-specific labels, options, validation and submission messages.
- Demonstration-only completion: enquiries are validated but are not emailed or stored.

### SEO

- Localized canonical URLs and page metadata.
- Lithuanian and English hreflang links with Lithuanian `x-default`.
- A bilingual sitemap and robots configuration.
- Local organization structured data.
- Localized Open Graph metadata and social images.
- Semantic headings and service- and location-specific page content.

### Accessibility

- Semantic HTML and logical landmarks.
- Keyboard-accessible navigation and visible focus states.
- A skip link and accessible mobile-menu controls.
- `aria-current` for page and language context.
- Properly associated form labels, descriptions and validation feedback.
- Alert and status regions with deliberate focus management.
- A polite live region for service-area results.
- Correct localized page language.

The implementation targets WCAG 2.1 AA good practice; it does not claim formal certification.

### Responsive Design

The interface was checked at 280px, 360px, 390px, 768px and desktop widths. Particular attention was given to longer Lithuanian labels, navigation controls, CTA wrapping, form fields, service-area results and the footer.

### Performance

Production Lighthouse benchmark recorded on 8 October 2026:

| Category | Mobile | Desktop |
| --- | ---: | ---: |
| Performance | 99 | 100 |
| Accessibility | 100 | 100 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |

These are laboratory measurements from the recorded production audit and may vary between runs. See [docs/PERFORMANCE.md](docs/PERFORMANCE.md) for metrics and audit conditions.

## Tech Stack

- Next.js 16 and the App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Server Components where appropriate
- Next.js Server Actions
- OpenStreetMap Nominatim
- Vercel
- Git and GitHub

No general-purpose i18n package, database, UI library or client state library is required.

## Architecture

Locale route files select locale-owned content and pass it into shared, locale-neutral page renderers. Central locale configuration owns public paths, navigation and publication state. A reusable site shell supplies localized navigation, language switching, landmarks and footer content. Metadata and sitemap helpers derive localized discovery information from the same route model.

Interactive tasks remain narrowly scoped: Contact validation and service-area lookup use Server Actions, while Client Components are limited to behavior that requires browser state.

```text
Browser
  |
Next.js App Router
  |
Locale routes (/lt, /en)
  |
Shared page renderers
  |
Locale-owned content
  |
Server Actions
  |-- Contact validation
  |-- Service-area lookup
  |
External service
  |-- OpenStreetMap Nominatim
```

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for the technical flow and [docs/MULTILINGUAL_ARCHITECTURE.md](docs/MULTILINGUAL_ARCHITECTURE.md) for localization details.

## Route Structure

| Page | Lithuanian | English |
| --- | --- | --- |
| Home | `/lt` | `/en` |
| Heating | `/lt/heating` | `/en/heating` |
| Heat Pumps | `/lt/heat-pumps` | `/en/heat-pumps` |
| Plumbing | `/lt/plumbing` | `/en/plumbing` |
| Emergency Repairs | `/lt/emergency-repairs` | `/en/emergency-repairs` |
| Service Area | `/lt/service-area` | `/en/service-area` |
| About | `/lt/about` | `/en/about` |
| Contact | `/lt/contact` | `/en/contact` |

The root redirects to `/lt`. Legacy unprefixed English deep links redirect to their `/en/...` equivalents and preserve query parameters.

## Testing & QA

The completed implementation has been checked with:

- `npm run lint`
- `npm run build`
- `git diff --check`
- Route smoke tests across both locale trees
- Bilingual page and navigation rendering
- Contact service, enquiry and location preselection
- Inside, outside and unresolved service-area cases
- Responsive review at the documented viewport widths
- Sitemap, robots, canonical, hreflang and Open Graph inspection
- Localized 404 responses
- Contact validation, status roles and focus behavior
- Keyboard navigation, skip link, menu behavior and live-region behavior

The repository does not currently include an automated test suite, so none is claimed.

## Design Decisions

- A restrained, warm regional-trades palette supports reliability without looking corporate.
- Readable system typography avoids an additional font dependency.
- Motion is kept minimal so content and task completion remain primary.
- Photography supports specific services without overwhelming the page hierarchy.
- Customer-facing credibility takes priority over portfolio spectacle.
- No fake address, telephone number, opening hours, testimonials, certifications or client history are presented.
- The footer includes a clear portfolio disclosure.

## Challenges & Solutions

1. **Preserving enquiry context across locales** — the language switcher retains only validated Contact parameters, using the same parsing contract as the form prefill.
2. **Publishing translations without exposing incomplete pages** — translation status and a centralized publication gate allowed each Lithuanian batch to remain unpublished until the complete locale was ready.
3. **Checking real locations without implying exact coverage** — server-side geocoding and Haversine distance provide useful advisory classification while the copy explicitly requires final confirmation.
4. **Keeping bilingual architecture lightweight** — explicit locale routes and typed local content avoid a runtime i18n dependency while preserving independent metadata and page language.
5. **Supporting longer Lithuanian navigation labels** — responsive navigation and narrow-screen header behavior were tested down to 280px without shortening approved copy.

## What This Project Demonstrates

- Requirements interpretation and commercial decision-making
- Frontend development with Next.js, React and TypeScript
- Maintainable App Router and content architecture
- Responsive UI implementation
- Multilingual UX and localized routing
- Local and multilingual SEO
- Accessible navigation, forms and dynamic feedback
- Server-side validation and data handling
- Third-party geocoding integration
- Production deployment and verification
- Disciplined Git workflow and honest portfolio documentation

## Running Locally

Node.js 20.9 or newer and npm are required.

```sh
git clone https://github.com/paulalford/zemaitija-heat-home.git
cd zemaitija-heat-home
npm ci
npm run dev
```

Open `http://localhost:3000`. Additional repository scripts are:

```sh
npm run lint
npm run typecheck
npm run build
npm run start
```

## Project Status

- Bilingual Lithuanian and English site complete
- Public production deployment available
- Contact form intentionally remains demonstration-only
- Live email delivery and enquiry storage are deferred

## Portfolio Integrity

This project is an independently developed commercial-style portfolio case study based on a fictional business brief. It does not represent paid client work.
