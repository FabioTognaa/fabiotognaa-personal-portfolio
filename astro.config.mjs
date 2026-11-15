import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: "https://fabiotognarelli.vercel.app",
  trailingSlash: "never",
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    // niente asset inlinati: le icone restano file separati e cacheabili
    build: { assetsInlineLimit: 0 },
  },
});
