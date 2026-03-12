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

export async function getPublishedNonCoder() {
  const entries = await getCollection('nonCoder', ({ data }) => !data.draft);
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
  const [tutorials, news, blog, nonCoder, resources] = await Promise.all([
    getPublishedTutorials(),
    getPublishedNews(),
    getPublishedBlog(),
    getPublishedNonCoder(),
    getPublishedResources(),
  ]);
  const allTags = new Set<string>();
  [...tutorials, ...news, ...blog, ...nonCoder, ...resources].forEach((entry) => {
    entry.data.tags.forEach((tag) => allTags.add(tag));
  });
  return [...allTags].sort();
}
