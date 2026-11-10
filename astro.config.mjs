import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// CHANGE `site` to your real domain once you buy it.
// With a custom domain on GitHub Pages, do NOT set `base`.
export default defineConfig({
  site: "https://NaveenVashist007.github.io",
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
