# SEO Audit — aitutorials.com.au

**Date:** March 18, 2026
**Auditor:** Marketing Plugin (Full Site Audit)
**Focus:** Fresh angles beyond existing SEO-KEYWORD-STRATEGY.md

---

## Executive Summary

Your site has a solid technical foundation (Astro static site, clean URLs, structured data), but you're leaving massive opportunities on the table. The existing SEO strategy correctly identified the Claude ecosystem as your lane — that's still true. What it missed: you have a **Generative Engine Optimization (GEO) problem**, a **tag page bloat problem**, a **thin content problem**, and a **programmatic SEO opportunity** that could 5x your indexed pages with minimal effort.

**Biggest strength:** Clean Astro static site with fast load times, good URL structure, and you're already appearing in Google for Claude-related queries.

**Top 3 new priorities the existing strategy didn't cover:**

1. **GEO (Generative Engine Optimization)** — Your site isn't structured to get cited by AI assistants like ChatGPT, Perplexity, and Claude. This is the new SEO. Fix it now.
2. **Tag page bloat is hurting you** — 53 of your 118 sitemap URLs (45%) are thin tag pages with zero unique content. Google is crawling and ignoring them, which wastes your crawl budget and dilutes your authority.
3. **Programmatic comparison pages** — You can generate 50+ "X vs Y" tool comparison pages from your existing tools directory data. This is how niche sites scale fast.

---

## What Your Existing Strategy Got Right

Before the new stuff — credit where it's due. Your SEO-KEYWORD-STRATEGY.md correctly identified:

- Claude ecosystem as your strongest keyword pillar (confirmed by GSC data)
- The Australian .com.au advantage
- The indexing problem (14/99 pages indexed)
- Content calendar priorities (Claude Code vs Cursor, Flickpause case study)

This audit builds on top of that, not replaces it.

---

## New Finding #1: Generative Engine Optimization (GEO)

### The Problem

In 2026, a growing share of "searches" never reach Google. People ask ChatGPT, Perplexity, Claude, or Gemini directly. When these AI systems answer, they cite sources — and getting cited by AI is becoming as valuable as ranking on Google page 1.

Your site is currently invisible to AI citation engines. Here's why:

**What AI systems look for when citing:**
- Structured, factual content with clear claims
- Comparison tables with specific data points
- "Last updated" dates (signals freshness)
- Author expertise signals (about page, bylines)
- FAQ sections with direct answers
- Schema markup (especially FAQ, HowTo, Article)

**What your site is missing:**
- No visible "last updated" dates on articles (only pubDate)
- No author bylines on content pages
- No FAQ sections on tutorials
- Limited comparison tables (only the Claude Code vs Cursor post has one)
- No HowTo schema on tutorial pages

### The Fix

For every tutorial and guide, add:

1. **"Last updated: [date]"** visible on the page — AI systems heavily weight freshness
2. **Author byline** with a link to /about/ — signals expertise and trustworthiness
3. **A "Quick Answer" summary** at the top of each article (2-3 sentences answering the core question). AI systems love extractable answers.
4. **FAQ section** at the bottom of each tutorial with 3-5 common questions. Add FAQPage schema.
5. **HowTo schema** on tutorial pages — this gets rich results in Google AND makes content more citable by AI

**Impact:** High. This is where search is going. Sites that optimize for AI citation now will dominate in 12 months.
**Effort:** Medium. Needs template changes + content updates per article.

---

## New Finding #2: Tag Page Bloat

### The Problem

Your sitemap has 118 URLs. Of those, **53 are tag pages** (/tags/alibaba/, /tags/uber/, /tags/spotify/, etc.). Most of these tag pages contain just 1 article each.

Why this is bad:
- Google crawls these pages, finds almost no content, and labels them as "thin content"
- This dilutes your crawl budget — Google has a limited budget for how many pages it'll crawl on your site
- 53 thin pages competing with 20 real content pages makes your site look worse overall
- This is likely a major reason 69 pages are "Discovered - currently not indexed"

### The Numbers

| Page Type | Count | % of Sitemap |
|-----------|:-----:|:------------:|
| Tag pages | 53 | 45% |
| Content (blog/news/tutorials) | 31 | 26% |
| Utility pages (about, newsletter, start, etc.) | 11 | 9% |
| Resource/product pages | 7 | 6% |
| Challenge pages | 6 | 5% |
| Learning path pages | 4 | 3% |
| Listing/index pages | 6 | 5% |

Nearly half your sitemap is thin tag pages. That's terrible.

### The Fix

**Option A (recommended): noindex tag pages with fewer than 3 articles**
Add `<meta name="robots" content="noindex, follow">` to tag pages that only have 1-2 articles. Keep them navigable (follow) but tell Google not to index them. Once a tag accumulates 3+ articles, remove the noindex.

**Option B: Consolidate tags aggressively**
You have redundant tags: "ai-agents" AND "agents" AND "agentic-ai" all exist. "gpt-5" AND "gpt-5.4" both exist. Merge these. Target 15-20 high-value tags, not 53.

**Option C (nuclear): Remove tag pages from sitemap entirely**
Keep them on the site for navigation but exclude them from sitemap-0.xml. Only submit your real content pages to Google.

**My recommendation:** Do A + B together. Consolidate to ~20 tags and noindex any with fewer than 3 articles.

**Impact:** High. Immediately improves crawl budget allocation and reduces thin content signals.
**Effort:** Low. This is a template-level change in Astro.

---

## New Finding #3: Programmatic "X vs Y" Comparison Pages

### The Opportunity

Your /discover/ page lists 24+ AI tools across 9 categories. You already have the data. You could generate 50+ comparison pages like:

- "ChatGPT vs Claude: Which AI Assistant Should You Use?"
- "Perplexity vs Google: AI Search Compared"
- "Midjourney vs DALL-E: Best AI Image Generator"
- "Cursor vs Claude Code vs Windsurf: AI Coding Tools Compared"
- "Canva AI vs Adobe Firefly: Design Tool Showdown"

These comparison queries are **exactly what people search for**, and they're exactly what your existing GSC data shows you're already appearing for ("claude code vs cursor").

### Why This Works

- "[Tool A] vs [Tool B]" queries have high commercial intent
- Google shows these searchers comparison-style results
- Each page is semi-templated: same structure, different tools
- You've already validated this works — your Claude Code vs Cursor post exists and ranks
- AI citation engines LOVE structured comparison content

### How to Build It

Create a comparison page template in Astro that takes two tool slugs and generates:
- A structured comparison table (features, pricing, best for)
- Pros/cons for each tool
- "Our recommendation" section
- Schema markup (Product schema for each tool)

Then write 10-15 high-priority comparisons manually, using the template structure. These don't need to be 3,000-word essays — 1,200-1,500 words of genuine, opinionated comparison is enough.

### Priority Comparisons (based on search demand)

| Comparison | Search Interest | Competition |
|-----------|:-----------:|:-----------:|
| ChatGPT vs Claude | Very High | High |
| Claude Code vs Cursor | High | Medium |
| Perplexity vs ChatGPT | High | Medium |
| Midjourney vs DALL-E 3 | High | Medium-High |
| Claude vs Gemini | High | Medium |
| Cursor vs Windsurf | Medium | Low |
| Claude Code vs Copilot | Medium | Low |
| Canva AI vs Adobe Firefly | Medium | Medium |
| ElevenLabs vs PlayHT | Low-Med | Low |
| Perplexity vs Google Search | Medium | Low |

**Impact:** Very high. Comparison pages are traffic magnets.
**Effort:** Medium upfront (template + first 5 pages), then low per page.

---

## New Finding #4: Content Cannibalization

### The Problem

You have two nearly identical pages competing for the same keyword:

1. `/blog/claude-code-vs-cursor/` — "Claude Code vs Cursor: Which AI Coding Tool Should You Actually Use in 2026?"
2. `/blog/honest-review-cursor-vs-claude-code/` — Appears to be another Cursor vs Claude Code post

Google doesn't know which to rank. They're splitting your authority between two URLs for the same query.

You also have potential overlap between:
- `/news/2026-03-08-openai-gpt-5-4-computer-use/` and `/news/2026-03-14-openai-gpt-5-4-computer-use/` — two pages about GPT-5.4 computer use, published 6 days apart

### The Fix

1. **Pick one Claude Code vs Cursor page as the canonical.** 301 redirect the other to it. The `/blog/claude-code-vs-cursor/` URL is cleaner — keep that one.
2. **Merge the GPT-5.4 news pages** or differentiate them significantly. If they cover different announcements, make that crystal clear in the titles and content. If they're similar, 301 redirect the older one.

**Impact:** Medium. Resolves authority splitting on your highest-potential keyword.
**Effort:** Very low. Two redirects.

---

## New Finding #5: Missing "Topical Authority" Signals

### The Problem

Google's ranking systems in 2026 heavily reward "topical authority" — sites that comprehensively cover a topic from every angle. Your tutorial section has 6 tutorials covering broad topics. Competitors like LearnPrompting have hundreds of pages on prompt engineering alone.

You're spread thin across: prompt engineering, Claude, AI agents, workflow automation, system prompts, and tool comparisons. Google sees a site that's 6 pages wide and 1 page deep. That doesn't signal authority.

### The Fix: Topic Clusters

Build depth in your strongest pillar first (Claude ecosystem), then expand.

**Claude Cluster (build this first):**

```
                    ┌─ Getting Started with Claude
                    ├─ Claude Models Explained (Opus/Sonnet/Haiku)
                    ├─ Claude Code Beginner Guide
    PILLAR PAGE ────├─ Claude Cowork Tutorial
  "Complete Guide   ├─ Claude MCP Servers Guide
    to Claude"      ├─ Claude CLAUDE.md Guide
                    ├─ Claude Prompt Engineering Tips
                    ├─ Claude Code vs Cursor
                    ├─ Claude Code vs Copilot
                    ├─ Claude API Quickstart
                    └─ Claude Max: Is It Worth It?
```

Every spoke links back to the pillar page. The pillar page links to every spoke. This creates a dense internal linking web that screams "this site is THE authority on Claude" to Google.

You already have 3-4 of these spokes. You need the pillar page and 6-7 more spokes. That's achievable in 4-6 weeks.

**Impact:** Very high. Topic clusters are how small sites compete with bigger ones.
**Effort:** High (significant content creation), but spread over weeks.

---

## On-Page Issues Table

| Page | Issue | Severity | Fix |
|------|-------|----------|-----|
| All tutorials | No "last updated" date visible | High | Add updatedDate to frontmatter, render on page |
| All tutorials | No author byline | High | Add author name + link to /about/ |
| All tutorials | No HowTo schema | Medium | Add JSON-LD HowTo markup to tutorial layout |
| All tutorials | No FAQ section | Medium | Add 3-5 FAQs per tutorial with FAQPage schema |
| /tutorials/getting-started-with-claude/ | ~1,200 words — thin for a "complete beginner's guide" | High | Expand to 2,500+ words with screenshots and examples |
| /tutorials/getting-started-with-claude/ | Zero external links | Medium | Link to claude.ai, Anthropic docs |
| /blog/claude-code-vs-cursor/ | No images with alt text | Medium | Add comparison screenshots, feature screenshots |
| /blog/claude-code-vs-cursor/ | No FAQPage schema despite Q&A content | Medium | Add FAQPage JSON-LD |
| /start/ | Generic meta description | Low | Rewrite: "Free AI tutorials for beginners. Learn Claude, ChatGPT, prompt engineering..." |
| /discover/ | Heavy JS reliance for rendering | Medium | Ensure tool cards render in static HTML for crawlers |
| /resources/ | Only 4 resources | Low | Expand or merge into /discover/ |
| 53 tag pages | Thin content (1-2 articles each) | Critical | Noindex tags with <3 articles, consolidate redundant tags |
| All pages | No visible breadcrumbs (schema exists but no UI) | Low | Add visual breadcrumb nav for UX + SEO |

---

## Technical SEO Checklist

| Check | Status | Details |
|-------|--------|---------|
| HTTPS | ✅ Pass | Served over HTTPS |
| Sitemap | ⚠️ Warning | Exists but bloated with 53 thin tag pages |
| Robots.txt | ✅ Pass | Allows all crawlers, references sitemap |
| Canonical tags | ⚠️ Warning | Need to verify canonicals on duplicate content |
| Page speed | ✅ Likely Pass | Astro static site on GitHub Pages = fast by default |
| Mobile responsive | ✅ Likely Pass | Astro sites are responsive by default |
| Structured data | ⚠️ Warning | Article + WebSite + Breadcrumb exist, but missing HowTo, FAQ, Product |
| Internal linking | ⚠️ Warning | Weak cross-linking between related tutorials |
| Image alt text | ❌ Fail | Multiple pages have zero descriptive alt text |
| Crawl budget | ❌ Fail | 45% of sitemap is thin tag pages |
| Content freshness | ⚠️ Warning | No "updated" dates visible; all content from Feb 2026 |
| Duplicate content | ❌ Fail | Two Claude Code vs Cursor pages, two GPT-5.4 news pages |
| RSS feed | ✅ Pass | /rss.xml exists |
| 404 handling | ⚠️ Unknown | Not tested |

---

## Competitor Comparison

| Dimension | aitutorials.com.au | LearnPrompting.org | NxCode.io | Sabrina.dev |
|-----------|-------------------|-------------------|-----------|-------------|
| Content volume | ~30 pages | 200+ pages | 50+ pages | 20+ pages |
| Keyword focus | Broad AI + Claude | Prompt engineering | Claude Code specifically | Claude Code beginner |
| Content depth | 1,200-2,200 words | 500-3,000 words | 1,500-3,000 words | 2,000+ words |
| Update frequency | Weekly | Weekly | Bi-weekly | Weekly |
| Structured data | Article + Breadcrumb | Extensive | Basic | Basic |
| Australian angle | ✅ Yes (.com.au) | ❌ No | ❌ No | ❌ No |
| Topic clusters | ❌ No | ✅ Yes (deep) | Partial | ❌ No |
| Comparison content | 1 page | Multiple | Multiple | Few |
| Newsletter/email | ✅ Yes (Brevo) | ✅ Yes | ❌ No | ✅ Yes (Substack) |

**Your edge:** Nobody else combines Australian targeting + non-coder angle + Claude expertise. That triple niche is uncontested. But you need more content depth to compete with LearnPrompting on authority.

---

## Keyword Opportunities — NEW (not in existing strategy)

| Keyword | Est. Difficulty | Opportunity | Intent | Recommended Content |
|---------|:-:|:-:|:-:|---|
| best AI tools for small business australia | Easy | High | Commercial | Listicle with AUD pricing |
| claude vs chatgpt which is better | Medium | High | Commercial | Head-to-head comparison |
| perplexity ai vs google search | Medium | High | Commercial | Comparison page |
| how to use AI at work no coding | Easy | High | Informational | Tutorial/guide |
| AI tools comparison chart 2026 | Medium | High | Commercial | Interactive comparison tool |
| free AI courses australia | Easy | Medium | Informational | Resource roundup + your own paths |
| what can AI do for my business | Easy | Medium | Informational | Practical use case guide |
| claude projects vs chatgpt custom gpts | Low | Medium | Commercial | Feature comparison |
| AI image generator comparison | Medium | Medium | Commercial | Multi-tool comparison |
| how to write prompts for AI beginners | Easy | Medium | Informational | Beginner guide (you have this — expand it) |
| midjourney vs dall-e 3 2026 | Medium | Medium | Commercial | Comparison with examples |
| AI agent tools comparison | Medium | Medium | Commercial | Tool roundup |
| perplexity ai tutorial | Easy | High | Informational | New tutorial (gap in your content) |
| cursor vs windsurf | Low | High | Commercial | AI coding tools comparison |
| claude memory how to use | Low | Medium | Informational | Tutorial (aligns with your Memory Architect product) |

---

## Prioritized Action Plan

### Quick Wins (This Week)

| Action | Impact | Effort | Details |
|--------|:------:|:------:|---------|
| 301 redirect duplicate content | High | 15 min | Redirect `/blog/honest-review-cursor-vs-claude-code/` → `/blog/claude-code-vs-cursor/`. Same for duplicate GPT-5.4 news. |
| Noindex thin tag pages | High | 30 min | Add conditional noindex to tag template for tags with <3 articles |
| Consolidate redundant tags | Medium | 45 min | Merge: ai-agents + agents + agentic-ai → ai-agents. Merge gpt-5 + gpt-5.4. Target 20 tags total. |
| Add alt text to images | Medium | 1 hr | Audit all pages, add descriptive alt text |
| Add external links to tutorials | Medium | 30 min | Each tutorial should link to 1-2 authoritative external sources |

### This Month

| Action | Impact | Effort | Details |
|--------|:------:|:------:|---------|
| Add "Quick Answer" summaries to tutorials | High | 3 hrs | 2-3 sentence answer at top of each tutorial for AI citation |
| Add author bylines + updated dates | High | 2 hrs | Template change + frontmatter updates |
| Add FAQPage schema to tutorials | High | 3 hrs | Write 3-5 FAQs per tutorial, add JSON-LD |
| Build comparison page template | Very High | 4 hrs | Astro template for "[Tool A] vs [Tool B]" pages |
| Write first 5 comparison pages | Very High | 10 hrs | Start with highest-demand comparisons from keyword table |
| Expand "Getting Started with Claude" | High | 3 hrs | From 1,200 → 2,500+ words with screenshots |

### This Quarter

| Action | Impact | Effort | Details |
|--------|:------:|:------:|---------|
| Build Claude topic cluster | Very High | 20+ hrs | Pillar page + 8-10 spoke pages (see cluster diagram above) |
| Add HowTo schema to all tutorials | Medium | 4 hrs | Structured step-by-step JSON-LD |
| Write 10 more comparison pages | High | 15 hrs | Leverage template, cover remaining high-demand pairs |
| Create "AI for Australian Business" content cluster | High | 15 hrs | 5-7 pages targeting AU-specific keywords |
| Implement Perplexity tutorial | High | 3 hrs | Gap — no one has great Perplexity tutorials yet |
| Build interactive comparison tool | Very High | 8 hrs | React/Astro component letting users compare any 2-3 tools |

---

## The Big Insight Your Existing Strategy Missed

**Your strategy is built for 2024 SEO. You need 2026 SEO.**

2024 SEO = write great content → rank on Google → get clicks.
2026 SEO = write great content → rank on Google → get clicks → **also get cited by AI assistants**.

Perplexity, ChatGPT with search, Claude with search, Google AI Overviews — these systems are eating traditional search traffic. But they still need to cite sources. Sites that structure their content for AI extractability (clear answers, structured data, comparison tables, FAQ sections) get cited. Sites that don't, get ignored.

You're building an AI tutorial site. Your audience literally uses AI search tools. If they ask "what's the best AI tool for X?" and an AI cites you in the answer — that's more valuable than a Google page 1 ranking.

Optimize for both.

---

## Sources

- [Learn Prompting](https://learnprompting.org/)
- [NxCode Claude Code Tutorial](https://www.nxcode.io/resources/news/claude-code-tutorial-beginners-guide-2026)
- [Claude Code Ultimate Guide (GitHub)](https://github.com/FlorianBruniaux/claude-code-ultimate-guide)
- [Builder.io — How I Use Claude Code](https://www.builder.io/blog/claude-code)
- [Sabrina.dev — Claude Code for Normal People](https://www.sabrina.dev/p/every-claude-code-concept-explained-beginners)
- [Programmatic SEO Tools 2026](https://www.trysight.ai/blog/best-programmatic-seo-tools)
- [GEO: Using Programmatic SEO for Generative Engine Optimization](https://stormy.ai/blog/programmatic-seo-tools-generative-engine-optimization-2026)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [DataCamp — Claude Code Tutorial](https://www.datacamp.com/tutorial/claude-code)
