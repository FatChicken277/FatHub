// @ts-check
import { defineConfig } from "astro/config";

import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://fathub.pages.dev/", // Your website URL

  i18n: {
    locales: ["es", "en"],
    defaultLocale: "en",
  },

  integrations: [
    sitemap(),
    robotsTxt(),
    react(),
    icon(),
    mdx(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
