import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { byNewest } from '../lib/articles';

export async function GET(context) {
  const articles = (await getCollection('articles'))
    .filter((article) => !article.data.draft)
    .sort(byNewest);

  return rss({
    title: 'Thoughts',
    description: 'Notes on building software, teams, and businesses.',
    site: context.site,
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.publishedAt,
      link: `/articles/${article.id}/`,
      categories: [article.data.category, ...article.data.tags],
    })),
  });
}
