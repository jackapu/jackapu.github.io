# Personal Developer Blog

A modern blog built with Next.js 16, TypeScript, and Tailwind CSS. Write posts in Markdown, push to deploy.

## Tech Stack

| Technology | Role |
|---|---|
| Next.js 16 | React framework with App Router + SSG |
| TypeScript | Type safety |
| Tailwind CSS + Typography | Styling |
| unified / rehype-highlight | Markdown → HTML with syntax highlighting |
| highlight.js (github-dark) | Code block theme |
| gray-matter | Frontmatter parsing |
| date-fns | Date formatting |

## Project Structure

```
app/
  layout.tsx          # Root layout (header/footer)
  page.tsx            # Home page
  globals.css         # Global styles + code block theme
  blog/
    page.tsx          # Blog listing
    [slug]/page.tsx   # Individual post
  about/page.tsx      # About page
components/
  Header.tsx
  Footer.tsx
  PostCard.tsx
  PostContent.tsx     # Client component — renders HTML + copy buttons
lib/
  posts.ts            # Markdown processing (unified pipeline)
posts/                # Your blog posts (.md files)
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Writing Posts

Create a `.md` file in `posts/`:

```markdown
---
title: "Your Post Title"
date: "2024-02-15"
excerpt: "Brief description shown on post cards"
tags: ["Python", "Performance"]
author: "Your Name"
---

Content in Markdown here. Code blocks get syntax highlighting automatically:

\`\`\`python
def hello():
    print("Hello, world!")
\`\`\`
```

Each code block has a **Copy** button in the top-right corner.

## Personalizing

| What | Where |
|---|---|
| Site title & description | `app/layout.tsx` → `metadata` |
| Bio | `app/about/page.tsx` |
| Social links | `components/Footer.tsx` |
| Primary color palette | `tailwind.config.js` → `colors.primary` |

## Deployment

### Vercel (recommended)

Connect your GitHub repo at [vercel.com](https://vercel.com) — zero config needed.

### GitHub Pages

1. Uncomment and update `basePath` / `assetPrefix` in `next.config.js`:
   ```js
   basePath: '/your-repo-name',
   assetPrefix: '/your-repo-name',
   ```

2. Push to `main` — the included `deploy.yml` workflow builds and deploys automatically.

3. Enable Pages in repo **Settings → Pages → Source: GitHub Actions**.

Your site will be live at `https://yourusername.github.io/your-repo-name`.

### Post workflow

```bash
# Write
code posts/new-post.md

# Preview
npm run dev

# Deploy
git add posts/new-post.md
git commit -m "Add: post title"
git push
```

## Useful Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run lint     # Run ESLint
```

## Troubleshooting

**Module not found errors**
```bash
rm -rf node_modules package-lock.json && npm install
```

**Deployment fails on GitHub Pages**
- Check the Actions tab for error details
- Ensure `basePath` in `next.config.js` matches your repo name exactly
- Confirm Pages is enabled under Settings → Pages
