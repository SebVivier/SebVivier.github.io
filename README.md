# Atelier Petites Mains – GitHub Pages (Next.js static export)

**Stack**: Next.js (App Router) + Tailwind + framer-motion + lucide-react  
Deployment: GitHub Pages via Actions (static export to `/out`).

## Local
```bash
npm install
npm run dev
# http://localhost:3000
```

## Build & static export
```bash
npm run build && npm run export
# static files in /out
```

## Deploy to GitHub Pages
- Push to `main`. The workflow in `.github/workflows/pages.yml` will build and publish.

## Customize
- Update `CONTACT_EMAIL` and `BRAND` in `app/page.tsx`.
- Replace placeholder images with your photos (put them into `/public` and use `/photo.jpg`).

# Update: Next.js static export change

- Removed `next export`. With Next 14 + App Router, setting `output: 'export'` in `next.config.js`
  makes `next build` generate static files directly into `/out`.
- GitHub Actions workflow now runs only `npm run build` and uploads `/out`.
