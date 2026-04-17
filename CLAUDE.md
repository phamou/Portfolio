# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # local dev server (Astro)
npm run build     # static site build to dist/
npm run preview   # preview the built output
```

No lint or test commands — this project has no ESLint, Prettier, or test suite configured.

For a GitHub Pages build locally:
```bash
GITHUB_PAGES=true GITHUB_PAGES_BASE=/Portfolio npm run build
```

## Architecture

This is an **Astro 6 + Tailwind CSS v4 + MDX** static portfolio site with four content collections.

### Content Collections (`src/content/`)

Defined in `src/content.config.ts` with Zod schemas. All collections use the glob loader and filter entries with `draft: true` at render time.

| Collection | Path | Key Schema Fields |
|---|---|---|
| `work` | `src/content/work/` | title, date, company, role, tags, impact[], draft |
| `athlete` | `src/content/athlete/` | title, date, type (training/race/reflection), takeaway, highlights[], draft |
| `kitchen` | `src/content/kitchen/` | title, date, category (coffee/tea/…), oneLiner, story, notes[], draft |
| `projects` | `src/content/projects/` | title, date, kind (featured/foundational), href, description, tags[], draft |

### Routing

- Static pages under `src/pages/` map 1:1 to routes
- Dynamic routes (`/work/[slug].astro`, `/athlete/[slug].astro`, `/kitchen/[slug].astro`) use `getStaticPaths()` + `getCollection()` to pre-generate one page per content entry

### Internal Links — `withBase()`

**Always use `withBase()` from `src/utils/withBase.ts` for all internal href values.** This resolves paths against `BASE_URL`, which is `/Portfolio` on GitHub Pages and `/` on Vercel. Forgetting this breaks navigation on GitHub Pages.

### Deployment

Two deployment targets, same codebase:

- **GitHub Pages** (primary): CI sets `GITHUB_PAGES=true` and `GITHUB_PAGES_BASE=/Portfolio`; Vercel adapter is disabled; output is plain static files in `dist/`. Workflow: `.github/workflows/github-pages.yml`.
- **Vercel** (alternative): No env vars needed; `@astrojs/vercel` adapter is enabled by default in `astro.config.mjs`.

The `public/.nojekyll` file is required — without it GitHub Pages will try to process the output with Jekyll and break the site.

### Styling

Tailwind v4 with no config file — just `@import "tailwindcss"` in `src/styles/global.css`. Dark theme is set globally (not toggled). Accent colors by section: indigo (work), orange (athlete), emerald (kitchen). Component-scoped CSS lives in individual `.astro` files.

### Components (`src/components/`)

- `SiteLayout.astro` — master layout with sticky header, nav, footer, social links, skip-to-content
- `Button.astro` — polymorphic link/button with `primary | secondary | ghost` variants
- `Card.astro` — generic card wrapper (renders as `div`, `a`, or `article`)
- `Timeline.astro` — work history renderer; accepts `accent` prop (`indigo | orange | emerald`)
- `SectionHeader.astro`, `TagPills.astro`, `GalleryGrid.astro`, `FeaturedGrid.astro` — supporting UI

### Static Assets (`public/`)

- `resume/AnhVuPham_Resume_2026.pdf` — linked from `src/pages/resume.astro`
- `images/` — all portfolio images (photos, logos, etc.)
- `favicon.svg`, `favicon.ico`
