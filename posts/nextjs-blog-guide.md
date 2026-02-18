---
title: "Building a Modern Blog with Next.js 14: A Complete Guide"
date: "2024-02-15"
excerpt: "Step-by-step guide to building a fast, SEO-friendly blog using Next.js 14, TypeScript, and Tailwind CSS. Perfect for developers who want a beautiful portfolio."
tags: ["Next.js", "React", "TypeScript", "Frontend"]
author: "Your Name"
---

After years of working primarily with backend technologies, I wanted to build a personal blog that showcased modern frontend skills. Here's what I learned building this site.

## Why Next.js?

I chose Next.js for several reasons:

1. **Static Site Generation (SSG)** - Perfect for blogs, generates HTML at build time
2. **Developer Experience** - TypeScript support, hot reload, great tooling
3. **Performance** - Automatic code splitting, image optimization
4. **SEO** - Server-side rendering capabilities when needed
5. **Free Hosting** - Deploy to Vercel or GitHub Pages for free

## Architecture Overview

The blog follows a simple but powerful architecture:

```
├── app/              # Next.js 14 app directory
│   ├── blog/         # Blog routes
│   ├── layout.tsx    # Root layout
│   └── page.tsx      # Home page
├── components/       # React components
├── lib/              # Utility functions
├── posts/            # Markdown blog posts
└── public/           # Static assets
```

## Working with Markdown

Blog posts are written in Markdown with frontmatter:

```markdown
---
title: "My Post Title"
date: "2024-02-15"
excerpt: "A brief description"
tags: ["Next.js", "React"]
---

Your content here...
```

Processing is handled by `gray-matter` and `remark`:

```typescript
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export async function getPostData(slug: string) {
  const fileContents = fs.readFileSync(`posts/${slug}.md`, 'utf8')
  const { data, content } = matter(fileContents)
  
  const processedContent = await remark()
    .use(html)
    .process(content)
  
  return {
    slug,
    content: processedContent.toString(),
    ...data
  }
}
```

## Styling with Tailwind

Tailwind CSS makes it easy to create beautiful, responsive designs:

```tsx
<article className="prose prose-lg dark:prose-invert max-w-none">
  <h1 className="text-4xl font-bold mb-4">{title}</h1>
  <div dangerouslySetInnerHTML={{ __html: content }} />
</article>
```

The `@tailwindcss/typography` plugin provides beautiful default styles for markdown content.

## Dark Mode Implementation

Adding dark mode is straightforward with Tailwind:

```typescript
const toggleDarkMode = () => {
  const isDark = document.documentElement.classList.toggle('dark')
  localStorage.setItem('darkMode', String(isDark))
}
```

## Static Site Generation

Next.js generates static HTML for all blog posts at build time:

```typescript
export async function generateStaticParams() {
  const posts = getAllPostSlugs()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
```

This means:
- **Lightning fast** - No database queries at runtime
- **Great SEO** - Search engines get full HTML
- **Free hosting** - Just static files
- **Scalable** - Handles any traffic

## Deployment Options

### Option 1: Vercel (Easiest)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: GitHub Pages

Add to `next.config.js`:

```javascript
module.exports = {
  output: 'export',
  basePath: '/your-repo-name',
}
```

Then deploy with a GitHub Action:

```yaml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## Performance Results

The results speak for themselves:

- **Lighthouse Score**: 100/100
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Total Bundle Size**: ~80KB (gzipped)

## Future Enhancements

The beauty of this setup is that it's easily expandable:

1. **Comments** - Add Giscus (GitHub Discussions)
2. **Analytics** - Integrate Vercel Analytics
3. **Search** - Client-side search with FlexSearch
4. **Newsletter** - API routes + email service
5. **CMS** - Add Contentful or Sanity for non-technical editors

## Lessons Learned

1. **Start Simple** - Markdown files are perfect for a personal blog
2. **Optimize Images** - Use Next.js Image component
3. **Measure Performance** - Use Lighthouse regularly
4. **Mobile First** - Design for mobile, scale up
5. **TypeScript** - Catch errors early, better DX

## The Code

The complete source code for this blog is available on [GitHub](https://github.com/yourusername/personal-blog). Feel free to use it as a starting point for your own blog!

Building this blog taught me that modern frontend development doesn't have to be complex. With the right tools, you can create something beautiful, fast, and maintainable in a weekend.
