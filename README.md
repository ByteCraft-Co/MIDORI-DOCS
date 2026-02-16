# MIDORI-DOCS

Modern documentation and legal portal for MIDORI, optimized for Vercel deployment.

## Highlights

- Next.js App Router architecture
- Structured docs with sidebar navigation
- Legal index (license, terms, privacy, trademark)
- Standalone installer placeholder page (`v0.1.0`)
- Light/Dark iOS-style theme switch with smooth transitions
- Google Material Symbols icon set
- Repository links:
  - https://github.com/ByteCraft-Co/MIDORI
  - https://github.com/ByteCraft-Co/MIDORI-DOCS
- Vercel config + Sentry-related env var template

## Environment Variables

Copy `.env.example` to `.env.local` for local work.

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SENTRY_DSN`
- `NEXT_PUBLIC_SENTRY_ENVIRONMENT`
- `NEXT_PUBLIC_SENTRY_TRACE_SAMPLE_RATE`
- `SENTRY_AUTH_TOKEN`
- `SENTRY_ORG`
- `SENTRY_PROJECT`

## Run Locally

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run start
```

## Vercel Deployment

1. Import this repository in Vercel.
2. Add environment variables from `.env.example`.
3. Deploy selected branch (typically `main`).
4. Configure custom domain/DNS in Vercel.
5. Set Sentry DSN values during deployment.