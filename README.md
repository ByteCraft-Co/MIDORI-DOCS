# MIDORI-DOCS

Official documentation and policy portal for the MIDORI programming language.

MIDORI-DOCS is designed to provide a clear, formal, and maintainable documentation experience for language users, contributors, and organizations evaluating MIDORI.

Primary repositories:
- MIDORI compiler/runtime: https://github.com/ByteCraft-Co/MIDORI
- MIDORI docs website: https://github.com/ByteCraft-Co/MIDORI-DOCS

## Overview

This project delivers:
- Guided tutorials with practical code examples
- Technical reference pages for language and compiler behavior
- Dedicated legal pages, separated from technical documentation
- Download and repository navigation pages

## Project Status

MIDORI is currently experimental. The website is production-grade as a documentation frontend, while language and runtime capabilities may evolve across releases.

## What Makes This Docs Portal Effective

- Section-based architecture: tutorials, reference, and legal are intentionally separated
- Per-section sidebars: each section has focused navigation
- Bottom page flow: `Back` and `Next` controls include short destination descriptions
- Formal visual language: restrained styling, no cartoonish/bubbly hover effects
- Static generation: fast page loads and predictable deployments

## Built-In Installer

The docs include a built-in installer listing surfaced on the downloads page:

| Artifact | Version | Status | Download Access |
| --- | --- | --- | --- |
| MIDORI Setup | v0.1.0 | Experimental | Available from `/downloads` |

## Technology Stack

- Next.js App Router (`next@16`)
- React (`react@19`)
- TypeScript
- ESLint

## Requirements

- Node.js 20 or newer (recommended)
- npm 10 or newer (recommended)

## Quick Start

```bash
git clone https://github.com/ByteCraft-Co/MIDORI-DOCS.git
cd MIDORI-DOCS
npm install
npm run dev
```

Local URL:
- `http://localhost:3000`

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Create production build
- `npm run start`: Start production server
- `npm run lint`: Run lint checks

## Environment Configuration

Copy `.env.example` to `.env.local` for local development:

```bash
cp .env.example .env.local
```

Environment variables:
- `NEXT_PUBLIC_SITE_URL`: canonical base URL for metadata and sitemap
- `NEXT_PUBLIC_SENTRY_DSN`: public Sentry DSN (optional)
- `NEXT_PUBLIC_SENTRY_ENVIRONMENT`: Sentry environment label (optional)
- `NEXT_PUBLIC_SENTRY_TRACE_SAMPLE_RATE`: Sentry trace sampling (optional)
- `SENTRY_AUTH_TOKEN`: Sentry release/auth token (optional)
- `SENTRY_ORG`: Sentry organization slug (optional)
- `SENTRY_PROJECT`: Sentry project slug (optional)

## Route Map

- `/`: home
- `/docs`: documentation hub
- `/docs/tutorials/[slug]`: tutorial pages and tutorial-only sidebar
- `/docs/reference/[slug]`: reference pages and reference-only sidebar
- `/legal`: legal index
- `/legal/[slug]`: legal pages and legal-only sidebar
- `/downloads`: installer and distribution page
- `/repos`: official repository links
- `/sitemap.xml`: generated sitemap

## Content Architecture

Content model:
- `lib/docs.ts`
  - `tutorialDocs`
  - `referenceDocs`
  - `getPagerLinks(...)` for bottom navigation metadata
- `lib/legal.ts`
  - `legalDocs`

Render routes:
- `app/docs/tutorials/[slug]/page.tsx`
- `app/docs/reference/[slug]/page.tsx`
- `app/legal/[slug]/page.tsx`

Reusable UI:
- `components/SectionSidebar.tsx`
- `components/PagePager.tsx`

## Visual and UX Standards

- Formal, professional presentation
- No bubbly/cartoonish interactions
- Section-scoped navigation for clarity
- Tutorial and reference pages include code blocks and examples
- Legal content is isolated from technical content

## Branding and Favicon

Favicon uses the MIDORI logo configured in `app/layout.tsx`:
- icon: `/assets/midori-logo.ico`
- apple icon: `/assets/midori-logo.png`

Assets:
- `public/assets/midori-logo.ico`
- `public/assets/midori-logo.png`

## Project Structure

```text
app/
  docs/
    page.tsx
    tutorials/
      page.tsx
      [slug]/page.tsx
    reference/
      page.tsx
      [slug]/page.tsx
  legal/
    page.tsx
    [slug]/page.tsx
  downloads/page.tsx
  repos/page.tsx
  page.tsx
  layout.tsx
  globals.css
  sitemap.ts

components/
  Header.tsx
  Footer.tsx
  SectionSidebar.tsx
  PagePager.tsx

lib/
  docs.ts
  legal.ts

public/
  assets/
  downloads/
```

## Build and Release Checklist

Run before merge or deployment:

```bash
npm run lint
npm run build
```

## Deployment (Vercel)

1. Import this repository in Vercel.
2. Configure environment variables from `.env.example`.
3. Deploy the target branch (typically `main`).
4. Configure domain and DNS if needed.
5. Confirm `NEXT_PUBLIC_SITE_URL` matches the deployed domain.

## Troubleshooting

- Build errors after route refactors:
  - delete `.next` and run `npm run build` again
- Favicon not updating:
  - clear browser cache and hard refresh
  - confirm `public/assets/midori-logo.ico` exists

## License

The docs website and MIDORI project sources are MIT-licensed. See the legal section on the site for policy summaries.
