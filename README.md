# frabanfo.github.io

Personal portfolio and CV of Francesco Banfi, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Update content

All content lives in `src/data/profile.ts`. It feeds both the website (`/`) and the ATS-friendly CV (`/cv`).

```sh
npm install
npm run dev      # local preview at http://localhost:4321
npm run cv:pdf   # regenerate public/cv.pdf from the /cv page
```

Push to `main` and GitHub Actions deploys the site automatically.
