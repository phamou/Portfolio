// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import vercel from '@astrojs/vercel';

// GitHub Pages project sites are served from /<repo>/; set GITHUB_PAGES=true in CI only.
// Vercel and local dev keep base "/" (do not set GITHUB_PAGES locally).
const githubPages = process.env.GITHUB_PAGES === 'true';
const repoBase = process.env.GITHUB_PAGES_BASE ?? '/portfolio';

// https://astro.build/config
// GitHub Pages serves static files only — omit the Vercel adapter in CI so `dist/` is plain HTML/CSS/JS.
export default defineConfig({
  site: githubPages ? 'https://phamou.github.io' : undefined,
  base: githubPages ? repoBase : '/',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx()],
  ...(githubPages ? {} : { adapter: vercel() })
});