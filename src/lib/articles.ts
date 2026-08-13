import type { CollectionEntry } from 'astro:content';

export type Article = CollectionEntry<'articles'>;
export type Category = Article['data']['category'];

export const categoryDetails: Record<Category, { label: string; description: string }> = {
  software: {
    label: 'Software',
    description: 'Notes on how software gets designed, built, and shipped.',
  },
  business: {
    label: 'Business',
    description: 'Notes on customers, strategy, and running a business.',
  },
};

export const byNewest = (a: Article, b: Article) =>
  b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf();

// Drafts stay visible while writing locally and disappear from the built site.
export const isPublished = (article: Article) =>
  import.meta.env.PROD ? !article.data.draft : true;

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  }).format(date);
