# Atelier Petites Mains – GitHub Pages (Next.js static export)

**Stack**: Next.js (App Router) + Tailwind + framer-motion + lucide-react  
Deployment: GitHub Pages via Actions (static export to `/out`).

## Local
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Build & static export
```bash
npm run build && npm run export
# files in /out
```

## Deploy to GitHub Pages
- Push to `main`. The workflow in `.github/workflows/pages.yml` will build and publish.

## Customize
- Change your email in `app/page.tsx` (`CONTACT_EMAIL`).
- Replace placeholder patterns with your photos (put them in `/public` and use `/mon-fichier.jpg`).
