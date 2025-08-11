# Menchi's Touch – GitHub Pages (Next.js export)

Brand: **Menchi's Touch**  
Contact: **ambre.trevisan@yahoo.com**

## Ajouter des images produits
- Place tes fichiers dans **/public/products/** (ex: `doudou-lapin.jpg`).
- Dans `app/page.tsx`, mets `image: "/products/ton-fichier.jpg"` et `alt: "..."`.
- Recommande: 1600×1200 px (ou 1200×900), < 300 Ko.

## Logo
- Remplace **/public/logo.svg** par ton vrai logo (`/public/logo.png` si tu préfères) et mets le bon chemin dans `BRAND.logo`.

## Local
```bash
npm install
npm run dev
```

## Déploiement (GitHub Pages)
- Push → GitHub Actions build → publication sur Pages.
