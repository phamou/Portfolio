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

