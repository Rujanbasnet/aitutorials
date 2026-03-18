# AItutorials.com.au — Growth Implementation Prompt

Use this prompt in a Claude Code session inside the `C:\Users\61420\Projects\aitutorials\` project directory to implement the full growth foundation.

---

## Prompt

```
I need you to implement a growth foundation for aitutorials.com.au. This covers analytics, SEO structured data, product pages, reusable CTA components, and navigation updates. No new npm packages needed — everything is hand-coded.

Here's the full context and step-by-step instructions:

---

## BACKGROUND

aitutorials.com.au is a static site for practical AI tutorials targeting Australian professionals and small businesses. It has ~20 content pieces (tutorials, blog, news), a Brevo newsletter integration, and is deployed on GitHub Pages.

### What's missing (what you're building):
1. No analytics tracking
2. No Google Search Console verification
3. No structured data beyond basic Article + WebSite schemas
4. Products collection is defined in content.config.ts but has ZERO product files
5. No /products/ page exists
6. No reusable CTA components for embedding in tutorials
7. No "Products" link in navigation

### Research-backed strategy driving these changes:
- 63% of Australian SMEs haven't adopted AI — massive audience
- NO competitor owns "practical AI tutorials for Australians"
- Prompt packs are oversaturated (4.1% breakout rate). Higher-value bundles ($49-199) are where the money is
- In-content CTAs convert 121% better than banner ads
- BreadcrumbList, FAQPage, and Product schemas get rich results in Google
- Umami Cloud is free up to 1M events/month, cookieless, no consent banner needed

---

## STEP-BY-STEP IMPLEMENTATION

### Step 1: BaseLayout.astro — Add Analytics + Search Console Verification

File: `src/layouts/BaseLayout.astro`

Add Google Search Console meta tag after the `<meta name="generator">` tag (after line 38):

```html
<!-- Google Search Console verification -->
<meta name="google-site-verification" content="REPLACE_WITH_GSC_VERIFICATION_CODE" />
```

Add Umami analytics script after the Google Fonts link (after line 72), before `</head>`:

```html
<!-- Umami Analytics -->
<script defer src="https://cloud.umami.is/script.js" data-website-id="ed605b1f-128b-46e8-bbbe-0d4f754a8980"></script>
```

GSC: Already verified via domain property (sc-domain:aitutorials.com.au) — no meta tag needed.
Umami: Activated on 2026-03-18. Website ID: ed605b1f-128b-46e8-bbbe-0d4f754a8980

---

### Step 2: content.config.ts — Add `guide` to productType enum

File: `src/content.config.ts` (line 59)

Change:
```typescript
productType: z.enum(['template', 'prompt-pack', 'course', 'ebook', 'tool']),
```
To:
```typescript
productType: z.enum(['template', 'prompt-pack', 'course', 'ebook', 'tool', 'guide']),
```

---

### Step 3: Create 3 Product MDX Files

Create these in `src/data/products/`. All set to `draft: true` with `price: 0` as placeholders.

**File: `src/data/products/multi-model-strategy-guide.mdx`**
```mdx
---
title: "Multi-Model Strategy Guide"
description: "A practical guide to using multiple AI models strategically. Learn when to use ChatGPT vs Claude vs Gemini, how to chain models, and how to build workflows that leverage each model's strengths."
pubDate: 2026-03-11
price: 0
currency: "USD"
gumroadId: "trfhag"
gumroadUrl: "https://aitutor2.gumroad.com/l/trfhag"
productType: "guide"
featured: true
tags: ["ai-strategy", "prompt-engineering", "multi-model"]
draft: true
---

## What's Inside

A comprehensive breakdown of when and how to use different AI models for maximum results.

## Who This Is For

Anyone who uses more than one AI tool and wants to be strategic about which model to use for which task.

## What You'll Learn

- When to use ChatGPT, Claude, Gemini, and other models
- How to chain models together for better results
- Practical frameworks for model selection
```

**File: `src/data/products/memory-architect-pack.mdx`**
```mdx
---
title: "Memory Architect Pack"
description: "Templates and strategies for building persistent memory systems with AI. Configure Claude's project memory, ChatGPT's memory, and custom knowledge bases that make your AI remember everything."
pubDate: 2026-03-11
price: 0
currency: "USD"
gumroadId: "tuzbwa"
gumroadUrl: "https://aitutor2.gumroad.com/l/tuzbwa"
productType: "template"
featured: true
tags: ["memory", "claude", "templates", "productivity"]
draft: true
---

## What's Inside

Ready-to-use templates for building AI memory systems that persist across sessions.

## Who This Is For

Power users who want their AI tools to remember context, preferences, and project details across sessions.

## What's Included

- Project memory templates for different use cases
- Memory configuration guides for ChatGPT and Claude
- Knowledge base setup templates
```

**File: `src/data/products/openclaw-operator-kits.mdx`**
```mdx
---
title: "OpenClaw Operator Kits v1"
description: "Ready-made operator kits for OpenClaw automation. Pre-built configurations and workflows to get started with AI-powered browser automation faster."
pubDate: 2026-03-11
price: 0
currency: "USD"
gumroadId: "openclaw-operator-kits"
gumroadUrl: "https://aitutor2.gumroad.com/l/openclaw-operator-kits"
productType: "template"
featured: false
tags: ["automation", "openclaw", "browser-automation"]
draft: true
---

## What's Inside

Pre-configured operator kits to jumpstart your OpenClaw automation projects.

## Who This Is For

Users of OpenClaw who want pre-built automation configurations rather than starting from scratch.

## What's Included

- Pre-configured operator kits
- Setup instructions
- Example workflows
```

---

### Step 4: ContentLayout.astro — Add BreadcrumbList JSON-LD

File: `src/layouts/ContentLayout.astro`

Add a second JSON-LD script block right after the existing Article JSON-LD (after line 51), still inside `<BaseLayout>`:

```astro
<script type="application/ld+json" set:html={JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://aitutorials.com.au/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": collection.charAt(0).toUpperCase() + collection.slice(1),
      "item": `https://aitutorials.com.au/${collection}/`
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": title
    }
  ]
})} />
```

---

### Step 5: newsletter.astro — Add FAQPage JSON-LD

File: `src/pages/newsletter.astro`

Add this JSON-LD right after the opening `<BaseLayout ...>` tag. Match the 4 FAQ items already rendered on the page:

```astro
<script type="application/ld+json" set:html={JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How often will I hear from you?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Once a week, every Tuesday morning. No surprise emails or sales pitches."
      }
    },
    {
      "@type": "Question",
      "name": "Is it really free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "100% free. We fund the site through optional affiliate links on our tools page, never through your data."
      }
    },
    {
      "@type": "Question",
      "name": "I'm a complete beginner - is this for me?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We write for curious people, not just engineers. Every tutorial starts from the basics."
      }
    },
    {
      "@type": "Question",
      "name": "Can I unsubscribe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "One click, any time, no questions asked. There is an unsubscribe link at the bottom of every email."
      }
    }
  ]
})} />
```

Read the actual FAQ text from the newsletter page before implementing — match the exact wording.

---

### Step 6: Create ProductCTA Component

Create new file: `src/components/content/ProductCTA.astro`

This is a reusable card for embedding in MDX tutorials to promote related products. Uses the warm card style consistent with the site's glassmorphism aesthetic. Must include `not-prose` class so it renders correctly inside MDX content areas.

Props:
- `title: string` — product name
- `description: string` — short pitch
- `price: number` — price in dollars (0 = free)
- `currency?: string` — defaults to 'USD'
- `href: string` — link to Gumroad or /products/ page
- `productType?: string` — badge label (e.g., "template", "guide")

Layout: Horizontal on desktop (text left, price + button right), stacked on mobile. Amber accent button. Price shows "Free" when 0.

---

### Step 7: Create LeadMagnet Component

Create new file: `src/components/content/LeadMagnet.astro`

Email capture component for free resources (different from the newsletter CTA — this is for specific downloadable resources).

Props:
- `resourceName: string` — name of the free resource
- `description: string` — what they'll get
- `ctaText?: string` — button text, defaults to "Get the free {resourceName}"

Design: Dashed amber border, download icon, amber accent soft background. Email-only form. Uses the same Brevo form endpoint as the newsletter (action URL: `https://b4556b17.sibforms.com/serve/MUIFAHjyU7YMpzSHJctCG76TeifU-zeadE5xjY7m1BVB8OAp92-d_PQhCoOWQEOmk4MS7WNag_cREDOfr2gD_9admQ-lmt1YRRSin829IqgP-7m6OgZ0UjrDdasmFSz8flCQlk8y_YBI-lKiQQ9qqxWgkhUmBJsqzUenQVwYH8PQvtI1fDVLICJxRSqP5KofXY00WORK9nXSGAsqiQ==`). Include honeypot field for bot prevention. Include `is:inline` script for form submission with success state. Include `not-prose` class.

---

### Step 8: Create Products Listing Page

Create new file: `src/pages/products/index.astro`

Follow the pattern from `src/pages/blog/index.astro` or `src/pages/tutorials/index.astro`.

Structure:
1. Import BaseLayout and `getPublishedProducts` from `@utils/collections`
2. Warm hero section with dotted background pattern (same as other listing pages)
3. Label: "Shop", Title: "Products", Subtitle about digital products
4. Grid of product cards (1 col mobile, 2 col md, 3 col lg)
5. Each card shows: product image (if exists), productType badge, featured badge, title, description (2-line clamp), price ("Free" if 0), "View details" link
6. Use `card-accent` class for cards, `fade-in` + `stagger` for animation
7. Empty state: warm card with "Coming soon" message and link to newsletter
8. Cards link to `/products/{product.id}/`

---

### Step 9: Create Product Detail Page

Create new file: `src/pages/products/[...id].astro`

Follow the `getStaticPaths` pattern from `src/pages/tutorials/[...id].astro` but use BaseLayout directly (NOT ContentLayout — products aren't articles).

Structure:
1. `getStaticPaths()` using `getCollection('products')` (include drafts in static paths but filter in display)
2. Render MDX content with `render(entry)`
3. Product JSON-LD (schema.org/Product with Offer — price, currency, availability, url)
4. BreadcrumbList JSON-LD (Home > Products > Product Name)
5. Visual breadcrumb nav
6. Tags display
7. Large title + description
8. Price + "Buy on Gumroad" button (amber accent, opens in new tab with external link icon)
9. Product image (if exists)
10. MDX content in prose styling
11. Bottom CTA card repeating the buy button

---

### Step 10: Header.astro — Add Products to Navigation

File: `src/components/global/Header.astro` (lines 3-9)

Add `{ label: 'Products', href: '/products/' }` to the navLinks array, positioned after Blog and before Tools:

```typescript
const navLinks = [
  { label: 'Tutorials', href: '/tutorials/' },
  { label: 'News', href: '/news/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Products', href: '/products/' },
  { label: 'Tools', href: '/tools/' },
  { label: 'Resources', href: '/resources/' },
];
```

This automatically propagates to both desktop and mobile nav.

---

### Step 11: Footer.astro — Add Products Link

File: `src/components/global/Footer.astro` (lines 26-32)

Add a Products link in the "Content" column, after the Blog link:

```html
<li><a href="/products/" class="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">Products</a></li>
```

---

### Step 12: Build and Verify

Run `npm run build` to verify everything compiles without errors. The build includes Pagefind indexing, so product pages will automatically appear in site search once un-drafted.

---

## IMPORTANT NOTES

- All product files are `draft: true` — they won't appear on the live site until I review and un-draft them
- The analytics and GSC placeholders need real IDs — I'll create the accounts separately
- No new npm packages are being installed
- Match the existing site's color palette: amber accent (#D97706), warm backgrounds (#F5F1EB), sage (#2D6A4F)
- Use existing CSS classes: card-warm, card-accent, badge-beginner, badge-intermediate, tag, text-display, text-heading, label
- Components use PascalCase naming
- Static rendering only — no client-side hydration unless needed for form handling

## FILES MODIFIED (6)
1. src/layouts/BaseLayout.astro
2. src/layouts/ContentLayout.astro
3. src/content.config.ts
4. src/pages/newsletter.astro
5. src/components/global/Header.astro
6. src/components/global/Footer.astro

## FILES CREATED (7)
1. src/data/products/multi-model-strategy-guide.mdx
2. src/data/products/memory-architect-pack.mdx
3. src/data/products/openclaw-operator-kits.mdx
4. src/components/content/ProductCTA.astro
5. src/components/content/LeadMagnet.astro
6. src/pages/products/index.astro
7. src/pages/products/[...id].astro

After implementation, commit with message: "Add growth foundation: analytics, structured data, products pages, CTA components"
```

---

## Additional Context (for reference, not part of prompt)

### Full Growth Strategy saved at:
`C:\Users\61420\.claude\projects\C--Users-61420\memory\aitutorials-growth-strategy.md`

### Key research findings:
- Australian AI education market has a $44B GDP opportunity
- No competitor owns "practical AI tutorials for Australians"
- 37% of SMEs adopted AI, 63% haven't = massive audience
- Prompt packs oversaturated, education + tooling bundles ($49-199) are the play
- Payhip (free plan, 5% fee) beats Gumroad (10% fee) for selling digital products
- N8N templates are an emerging gold mine ($3,200/month reported from 5 templates)
- Content clusters rank 3x faster than standalone articles
- In-content CTAs convert 121% better than banner ads
- Umami Cloud free tier: 1M events/month, cookieless, GDPR-compliant
