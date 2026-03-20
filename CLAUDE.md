# AI Tutorials — Project CLAUDE.md

## Overview
AI learning platform built with Astro 5, Tailwind CSS v4, and MDX.
Deployed to GitHub Pages at aitutorials.com.au.

## Tech Stack
- **Framework:** Astro 5.0 (static output)
- **Styling:** Tailwind CSS v4 (Vite plugin, @theme tokens)
- **Content:** MDX via @astrojs/mdx
- **Search:** Pagefind (client-side)
- **Hosting:** GitHub Pages
- **Analytics:** Umami Cloud (website ID: ed605b1f-128b-46e8-bbbe-0d4f754a8980)
- **Newsletter:** Brevo (Sendinblue) integration
- **Products:** Gumroad integration

## Build / Run / Test
- **Dev:** `npm run dev` (port 4321)
- **Build:** `npm run build` (includes image optimization + Pagefind indexing)
- **Preview:** `npm run preview`

## Content
All content lives in `src/data/` as MDX files.
Content collections defined in `src/content.config.ts`.

Collections: tutorials, news, blog, nonCoder, products, resources, challenges

## Conventions
- Components use PascalCase: `PostCard.astro`
- CSS uses kebab-case custom properties: `--color-accent-cyan`
- TypeScript strict mode enabled
- Self-hosted fonts in `public/fonts/`
- Color palette: amber accent (#D97706), warm backgrounds (#F5F1EB), sage (#2D6A4F)

---

## SEO & Content Rules (Updated 2026-03-18)

### MANDATORY for Every Article

When writing ANY content for this site — whether manually, via scheduled task, or via Claude Code — follow these rules:

#### Frontmatter Requirements
Every article MUST include these fields when applicable:

```yaml
title: "Target Keyword — Natural, Click-worthy Title"
description: "150 chars max. Include primary keyword. End with CTA or value prop."
pubDate: 2026-03-18
updatedDate: 2026-03-18          # ALWAYS set when editing existing content
author: "AI Tutorials"
quickAnswer: "2-3 sentence direct answer to the article's core question. This appears in a highlight box and is optimized for AI citation engines (Perplexity, ChatGPT Search, Google AI Overviews)."
faqs:
  - question: "Common question about the topic?"
    answer: "Direct, concise answer. This generates FAQPage schema for Google rich results."
  - question: "Another question people search for?"
    answer: "Clear answer. Aim for 3-5 FAQs per article."
tags: ["specific-tag", "another-tag"]  # Use ONLY approved tags (see below)
```

#### Approved Tags (~20 core tags)
DO NOT create new tags without consolidating first. Use these:

ai-tools, ai-agents, anthropic, automation, chatgpt, claude, coding-with-ai,
computer-use, developer-tools, enterprise-ai, gemini, google, gpt-5.4,
industry, model-release, openai, productivity, prompt-engineering, regulation,
review, case-study, youtube, beginner, non-coder

Tags with fewer than 3 articles get `noindex` automatically.

#### On-Page SEO Checklist
- [ ] Title includes target keyword (first 60 chars)
- [ ] Meta description includes keyword + CTA (under 155 chars)
- [ ] URL slug is clean and keyword-rich
- [ ] H1 matches or closely mirrors the title tag
- [ ] First paragraph mentions the keyword naturally
- [ ] At least 3 internal links to other articles on the site
- [ ] At least 1 external link to an authoritative source
- [ ] Images have descriptive alt text
- [ ] Content is 1,500+ words for tutorials, 800+ for news
- [ ] Includes a comparison table or structured data where relevant
- [ ] `quickAnswer` is filled in (2-3 sentences, directly answers the core question)
- [ ] `faqs` has 3-5 entries with common questions people search for

#### GEO (Generative Engine Optimization)
Structure content so AI assistants (Perplexity, ChatGPT, Claude, Gemini) can cite it:
- Use clear, factual claims with specific data points
- Include comparison tables with concrete numbers
- Write FAQ sections that directly answer common queries
- Keep "Quick Answer" summaries extractable and self-contained
- Always include `updatedDate` — AI systems heavily weight freshness

#### Internal Linking Strategy
Every new article should link to at least 3 existing articles:
- 1 link to a tutorial in the Claude cluster
- 1 link to a related blog/news post
- 1 link to /start/, /discover/, or /newsletter/

#### Content Cannibalization Prevention
Before writing, check if a similar article already exists. NEVER create two articles targeting the same keyword. If updating a topic, edit the existing article and update `updatedDate`.

### Redirects
Configured in `astro.config.mjs`:
- `/blog/honest-review-cursor-vs-claude-code/` → `/blog/claude-code-vs-cursor/`
- `/news/2026-03-08-openai-gpt-5-4-computer-use/` → `/news/2026-03-14-openai-gpt-5-4-computer-use/`

### Schema Markup (auto-generated)
- Article + BreadcrumbList on all content pages
- FAQPage when `faqs` array is present in frontmatter
- Author as Person (links to /about/)
- dateModified when `updatedDate` is set

---

## Strategy Docs
- `STRATEGY.md` — Overall digital content strategy, positioning, monetization
- `SEO-KEYWORD-STRATEGY.md` — Keyword pillars, content calendar, indexing fixes
- `SEO-AUDIT-MARCH-2026.md` — Full site audit with GEO, tag bloat, programmatic SEO findings
- `DISTRIBUTION-STRATEGY.md` — Channel analysis (Reddit, LinkedIn, Newsletter, HN, etc.)
- `DISTRIBUTION-PLAYBOOK.md` — Weekly routine, templates, 30-day calendar
- `GROWTH-IMPLEMENTATION-PROMPT.md` — Step-by-step implementation for products, analytics, CTAs

## Scheduled Tasks
- `ai-news-scout` — Daily 5:30am AEST. Scans AI news, drafts publish-ready article. MUST follow SEO rules above.
- `flickpause-weekly-analytics` — Monday 9am. YouTube analytics review.
