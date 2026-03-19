// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://aitutorials.com.au',
  output: 'static',
  redirects: {
    // Fix content cannibalization — two posts competing for same keyword
    '/blog/honest-review-cursor-vs-claude-code/': '/blog/claude-code-vs-cursor/',
    // Fix duplicate GPT-5.4 news pages (keep the newer, more complete one)
    '/news/2026-03-08-openai-gpt-5-4-computer-use/': '/news/2026-03-14-openai-gpt-5-4-computer-use/',
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/tags/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'one-dark-pro',
      },
    },
  },
});
