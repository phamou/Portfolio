# Portfolio (Astro + Tailwind + Vercel)

Modern personal portfolio showcasing:
- **Work** (impact + case studies)
- **Outside of work**: **dragon boat** (athlete) + **kitchen lab** (coffee/tea/matcha/hōjicha/cocktails)
- **Projects** (curated + foundational)

## Quick start

Requirements:
- **Node.js**: `>= 22.12.0` (see `package.json` engines)

Commands:

```bash
npm install
npm run dev
```

Build + preview:

```bash
npm run build
npm run preview
```

## Content editing

Most content lives in collections (easy to add/iterate):
- `src/content/work/` — work case studies
- `src/content/athlete/` — dragon boat entries
- `src/content/kitchen/` — kitchen stories
- `src/content/projects/` — featured + foundational projects

Collection schemas are defined in `src/content.config.ts`.

## Assets
- Resume PDF: `public/resume/AnhVuPham_Resume_2026.pdf`
- Images: `public/images/`

## Deploy (Vercel)
- This repo includes the Vercel adapter (`@astrojs/vercel`) configured in `astro.config.mjs`.
- In Vercel, import the repo and use:
  - **Build Command**: `npm run build`
  - **Output**: default (handled by the adapter)

## Deploy (GitHub Pages)
This site is **Astro**, not Jekyll. The default GitHub Pages workflow that runs `actions/jekyll-build-pages` will **fail** because Jekyll tries to parse `.astro` files as YAML.

1. In the repo: **Settings → Pages → Build and deployment → Source** → choose **GitHub Actions** (not “Deploy from a branch” with Jekyll).
2. If GitHub created a workflow that uses `jekyll-build-pages`, **delete or disable** it so only `.github/workflows/github-pages.yml` runs.
3. If your repository name or Pages URL path differs, update **`GITHUB_PAGES_BASE`** in that workflow (must match `https://<user>.github.io/<repo>/`; this repo uses **`/Portfolio`**).
4. CI sets `GITHUB_PAGES=true` so `astro.config.mjs` applies the correct `site` and `base` for a project Pages URL. On CI, the Vercel adapter is skipped so the output in `dist/` is static files only.

