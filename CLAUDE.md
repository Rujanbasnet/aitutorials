# SynthLab — Project CLAUDE.md

## Overview
AI learning platform built with Astro 5, Tailwind CSS v4, and MDX.
Deployed to GitHub Pages at aitutorials.com.au.

## Tech Stack
- **Framework:** Astro 5.0 (static output)
- **Styling:** Tailwind CSS v4 (Vite plugin, @theme tokens)
- **Content:** MDX via @astrojs/mdx
- **Search:** Pagefind (client-side)
- **Hosting:** GitHub Pages

## Build / Run / Test
- **Dev:** `npm run dev` (port 4321)
- **Build:** `npm run build`
- **Preview:** `npm run preview`

## Content
All content lives in `src/data/` as MDX files.
Content collections defined in `src/content.config.ts`.

## Conventions
- Components use PascalCase: `PostCard.astro`
- CSS uses kebab-case custom properties: `--color-accent-cyan`
- TypeScript strict mode enabled
- Self-hosted fonts in `public/fonts/`
