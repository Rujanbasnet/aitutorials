import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPublishedTutorials, getPublishedNews, getPublishedBlog } from '@utils/collections';

export async function GET(context: APIContext) {
  const [tutorials, news, blog] = await Promise.all([
    getPublishedTutorials(),
    getPublishedNews(),
    getPublishedBlog(),
  ]);

  const allItems = [
    ...tutorials.map((t) => ({ ...t, _collection: 'tutorials' })),
    ...news.map((n) => ({ ...n, _collection: 'news' })),
    ...blog.map((b) => ({ ...b, _collection: 'blog' })),
  ].sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'SynthLab',
    description: 'Learn AI, build with AI, ship faster. Tutorials, news, and tools for the AI era.',
    site: context.site!.toString(),
    items: allItems.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.pubDate,
      link: `/${item._collection}/${item.id}/`,
    })),
  });
}
