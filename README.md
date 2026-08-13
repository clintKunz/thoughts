# thoughts

A small blog for notes on software development and business. The design is deliberately
plain: one narrow column of text, system fonts, no ornament — closer to
[paulgraham.com](https://paulgraham.com) than to a modern marketing site.

Built with [Astro](https://astro.build). Articles are Markdown files with validated
frontmatter, and the site builds to static HTML.

## Running it

```bash
npm install
npm run dev      # local server at http://localhost:4321
npm run build    # type-check content, then build to dist/
npm run preview  # serve the production build
```

Drafts are visible in `npm run dev` and excluded from `npm run build`, so unfinished
articles can live on the main branch safely.

## Writing an article

1. Copy `templates/article.md` into `src/content/articles/<category>/<slug>.md`.
   The filename becomes the URL: `src/content/articles/software/my-note.md` is served at
   `/articles/software/my-note`.
2. Fill in the frontmatter.
3. Write. Run `npm run dev` to read it in place.
4. Set `draft: false` (or delete the field) when it is ready.

### Frontmatter

| Field | Required | Notes |
| --- | --- | --- |
| `title` | yes | Shown in the list, the page heading, and the RSS feed. |
| `description` | yes | One sentence; used in listings and meta tags. |
| `publishedAt` | yes | `YYYY-MM-DD`. Controls ordering. |
| `updatedAt` | no | Shown next to the date when present. |
| `category` | yes | `software` or `business`. |
| `tags` | no | Free-form list, listed at the foot of the article. |
| `draft` | no | Defaults to `false`. Drafts are excluded from production builds. |
| `featured` | no | Defaults to `false`. Reserved for highlighting one article. |

The schema in `src/content.config.ts` enforces all of this, so `npm run build` fails on a
typo rather than publishing a broken page.

### Adding a category

Categories are a closed set, on purpose. To add one, extend the `category` enum in
`src/content.config.ts` and add a matching entry to `categoryDetails` in
`src/lib/articles.ts`. The topic page, navigation label, and filtering follow from those
two places.

## Structure

```
src/
  content/articles/       Markdown articles, one folder per category
  content.config.ts       Frontmatter schema
  components/
    ArticleList.astro     Plain list of articles
  layouts/
    BaseLayout.astro      Page shell, header, meta tags
  lib/articles.ts         Categories, sorting, draft filtering, date format
  pages/
    index.astro           Home: short intro and every article
    about.astro           What the site is for
    articles/index.astro  All articles, grouped by year
    articles/[...id].astro Article page
    categories/[category].astro  One page per category
    rss.xml.js            RSS feed
  styles/global.css       The entire stylesheet
templates/article.md      Starting point for a new article
```

## Deploying

`npm run build` emits static files to `dist/`, which any static host will serve
(Netlify, Cloudflare Pages, GitHub Pages, S3). Set `SITE_URL` to the real domain at build
time so canonical URLs and the RSS feed use it:

```bash
SITE_URL=https://your-domain.com npm run build
```
