import { defineConfig } from 'astro/config';

// User site on GitHub Pages: served at the domain root, so no `base` is needed.
export default defineConfig({
  site: 'https://frabanfo.github.io',
  build: {
    // Inline CSS so the CV page also renders correctly when printed to PDF from disk.
    inlineStylesheets: 'always',
  },
});
