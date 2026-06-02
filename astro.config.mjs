// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://emmanuel-umukoro.netlify.app",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Astro's built-in Sharp service handles WebP/AVIF + responsive srcset
    responsiveStyles: true,
  },
});
