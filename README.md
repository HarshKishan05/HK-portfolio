# Harsh Kishan: Portfolio

Static site (HTML, CSS, vanilla JS). No build step.

## Deploy on Vercel
1. Push this folder to a GitHub repo.
2. vercel.com > Add New > Project > import the repo > Deploy (framework: "Other").
3. Or drag the folder into Vercel, or run `npx vercel --prod`.

## After you get your real URL
Replace `https://harshkishan.vercel.app` with your actual domain in:
`index.html` (canonical, og:url, og:image, JSON-LD), `robots.txt`, `sitemap.xml`.

## What was optimized
- Performance: no framework, 1 CSS + 1 deferred JS file, photo as WebP in 2 sizes (45 KB / 91 KB) with srcset, preloaded hero image, width/height set (no layout shift), 1-year immutable caching via vercel.json.
- SEO: unique title and meta description, canonical, Open Graph and Twitter cards, Person JSON-LD, robots.txt, sitemap.xml, semantic headings.
- Accessibility: skip link, landmarks, visible focus, aria-current nav, native details/summary, descriptive alt text, new-tab link warnings, AA contrast, reduced-motion support.
- Responsive: fluid type with clamp(), grid auto-fit, tested layouts from 320px up.
- Animation/UI: one hero entrance, roadmap line that fills on scroll, hover states.
- Code cleanup: CSS variables, no unused code, single IIFE in JS.
