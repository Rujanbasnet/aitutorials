import { getCollection } from 'astro:content';

export async function getPublishedTutorials() {
  const entries = await getCollection('tutorials', ({ data }) => !data.draft);
  return entries.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getPublishedNews() {
  const entries = await getCollection('news', ({ data }) => !data.draft);
  return entries.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getPublishedBlog() {
  const entries = await getCollection('blog', ({ data }) => !data.draft);
  return entries.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getPublishedProducts() {
  const entries = await getCollection('products', ({ data }) => !data.draft);
  return entries.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getPublishedResources() {
  const entries = await getCollection('resources', ({ data }) => !data.draft);
  return entries.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getAllTags(): Promise<string[]> {
  const [tutorials, news, blog, resources] = await Promise.all([
    getPublishedTutorials(),
    getPublishedNews(),
    getPublishedBlog(),
    getPublishedResources(),
  ]);
  const allTags = new Set<string>();
  [...tutorials, ...news, ...blog, ...resources].forEach((entry) => {
    entry.data.tags.forEach((tag) => allTags.add(tag));
  });
  return [...allTags].sort();
}
