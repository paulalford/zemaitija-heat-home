# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary users are Lithuanian homeowners, property owners, landlords, rural
homeowners and people renovating residential properties in Šiauliai and the
wider Žemaitija region. They need to understand whether the company covers
their location, whether it handles their heating or plumbing job, and how to
start an appropriate enquiry. English-speaking residential customers in the
same service area are also supported.

Portfolio reviewers are a secondary audience. When their needs conflict with
the customer experience, customer-facing credibility and qualified enquiries
take priority while the portfolio disclosure remains visible.

## Product Purpose

Žemaitija Heat & Home is a production-quality website for a fictional local
heating and plumbing company. It exists to explain residential services,
establish trust, make the approximately 50 km service area understandable and
generate qualified customer enquiries.

The project also demonstrates professional web development, responsive design,
accessibility, local SEO, performance optimisation, maintainable engineering
and commercial understanding. Success means a visitor can quickly understand
what the company does, where it works and how to make an enquiry without the
portfolio framing undermining the customer journey.

## Positioning

The product combines the clarity and conversion discipline of a real local
trade website with an explicit, honest portfolio disclosure. It earns trust
through clear residential scope, geographic coverage, enquiry expectations and
practical next steps rather than fabricated testimonials, credentials,
availability or business results.

## Operating Context

The fictional business has six engineers and currently receives most work
through referrals. It serves residential properties in Šiauliai, surrounding
towns and villages, and the wider Žemaitija region within an approximately
50 km normal service radius.

Visitors may be planning an installation or renovation, comparing heat-pump
options, arranging maintenance, or dealing with an urgent heating or plumbing
problem. Many will visit on mobile devices or slower connections. Location,
service and enquiry context should carry into the contact flow so visitors do
not have to repeat information unnecessarily.

## Capabilities and Constraints

- Core services are heating-system installation and repair, heat-pump
  installation, general plumbing, boiler and heating maintenance, emergency
  repairs and residential call-outs.
- Public pages cover Home, Heating, Heat Pumps, Plumbing, Emergency Repairs,
  Service Area, About and Contact.
- Lithuanian and English are the supported locales. Lithuanian is the intended
  primary/default customer language; incomplete Lithuanian routes must remain
  unpublished until their copy is approved.
- The service-area checker uses server-side Nominatim lookup and Haversine
  distance calculation. Its radius is explanatory rather than a guarantee that
  every job can be accepted.
- Contact context uses the stable `service`, `enquiry` and `location` query
  parameters.
- The contact form is currently a clearly labelled portfolio demonstration. It
  validates enquiries but does not send email or require a database. A real
  delivery provider may be connected later without changing the form contract.
- The implementation uses Next.js, TypeScript and Tailwind CSS and targets
  Vercel. Platform capabilities are preferred over extra dependencies.
- Performance, semantic HTML, local SEO and minimal client-side JavaScript are
  durable constraints.

## Brand Commitments

The name `Žemaitija Heat & Home` must remain unchanged. The company should feel
professional, reliable, modern, practical, local and established. Language
should be straightforward and useful to homeowners, avoiding unsupported
claims, jargon, exaggerated urgency, generic startup language and overly
corporate presentation.

The site must always disclose that it is an independently developed
commercial-style portfolio case study based on a realistic small-business
brief.

## Evidence on Hand

- The approved English implementation is under `content/en`.
- Approved Lithuanian shared chrome and homepage Batch 1 content are under
  `content/lt`; the other seven Lithuanian pages remain untranslated and
  unpublished.
- Existing photographic assets are under `public/images`.
- Measured Lighthouse results and audit conditions are recorded in
  `docs/PERFORMANCE.md`. Only those actual measurements may be cited.
- The service-area checker, contextual enquiry flow and responsive site are
  working demonstrations in the application.
- There are no real testimonials, reviews, awards, certifications, customer
  counts, revenue figures or measured conversion results. Future work must not
  fabricate them.

## Product Principles

1. Make service, location and the next action understandable within seconds.
2. Prioritise customer credibility and qualified enquiries over portfolio
   spectacle.
3. Earn trust with clear scope and honest process rather than invented proof.
4. Keep both language experiences complete, equivalent and independently
   publishable.
5. Preserve fast, accessible use on mobile devices and slower connections.

## Accessibility & Inclusion

Target WCAG 2.1 AA good practice. Maintain semantic structure, keyboard access,
visible focus, adequate colour contrast, labelled forms, meaningful image
alternatives and logical heading order. Lithuanian and English content should
provide equivalent navigation, metadata, enquiry context and task completion
when each locale is published.
