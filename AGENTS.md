# Codex Project Instructions

## Project

This repository contains the Žemaitija Heat & Home portfolio project.

Read `docs/PROJECT_BRIEF.md` before making significant product, design, architecture, or implementation decisions.

The project is a realistic commercial-style portfolio case study for a fictional Lithuanian heating and plumbing company.

## Primary Objective

Build a production-quality small-business website that demonstrates:

- professional web development
- responsive design
- accessibility
- local SEO
- performance optimisation
- maintainable code
- sensible engineering decisions
- commercial understanding

The finished application must be suitable for public deployment and portfolio demonstration.

## Technology

Use:

- Next.js
- TypeScript
- Tailwind CSS

Deployment target:

- Vercel

Source control:

- Git
- GitHub

Do not introduce additional frameworks, databases, UI libraries, state-management systems, or dependencies unless they solve a genuine requirement.

Prefer platform and framework capabilities over unnecessary packages.

## Development Principles

Keep solutions simple, maintainable, and understandable.

Use:

- TypeScript throughout
- semantic HTML
- reusable components
- clear component boundaries
- descriptive names
- sensible directory structure
- responsive mobile-first layouts

Avoid:

- unnecessary abstraction
- premature optimisation
- duplicated code
- excessive dependencies
- excessive animations
- generic AI-generated visual design
- placeholder code left in production
- unexplained magic values

## Working Method

Before making a substantial change:

1. Read the relevant existing files.
2. Understand the requirement.
3. Identify the simplest appropriate implementation.
4. Mention any important architectural implications before proceeding.

For small and obvious changes, proceed directly.

Do not rewrite unrelated working code.

## Verification

After code changes, run the appropriate available checks.

These may include:

- TypeScript checks
- linting
- build
- tests

Fix problems introduced by your changes.

Do not claim that something works unless it has been verified where reasonably possible.

## Accessibility

Target WCAG 2.1 AA good practice.

Pay particular attention to:

- semantic structure
- keyboard accessibility
- visible focus states
- colour contrast
- form labels
- meaningful alternative text
- heading hierarchy

## Performance

Target Lighthouse scores of at least:

- Performance: 95
- Accessibility: 95
- Best Practices: 95
- SEO: 95

Avoid excessive client-side JavaScript and unnecessarily large assets.

## SEO

Implement appropriate:

- page titles
- meta descriptions
- canonical URLs where relevant
- Open Graph metadata
- semantic headings
- structured data
- sitemap
- robots.txt

The business has a strong local-search requirement.

## Portfolio Integrity

This is not a real paying-client project.

Never invent:

- testimonials
- customer reviews
- awards
- certifications
- business statistics
- customer numbers
- revenue improvements
- conversion improvements
- measured results

unless those results genuinely come from the working application or explicitly supplied project data.

The company itself is fictional.

Technical measurements such as Lighthouse scores may only be documented after they have actually been measured.

## Documentation

Keep documentation concise and useful.

When an architectural or implementation decision is significant, document the reason rather than merely describing the code.

The project should remain understandable to another developer reviewing it as portfolio evidence.

## Security

Never commit:

- passwords
- API keys
- access tokens
- private credentials

Use environment variables for secrets.

Do not weaken security merely to make development easier.

## Git

Do not create commits unless explicitly asked.

Do not rewrite Git history.

Keep changes logically scoped so they can be reviewed and committed cleanly.

## Communication

When reporting completed work, briefly state:

- what changed
- why
- what was verified
- any remaining issue or limitation

Do not exaggerate results.
