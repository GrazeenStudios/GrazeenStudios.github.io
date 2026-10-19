import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://grazeenstudios.github.io",
  integrations: [
    sitemap({
      i18n: { defaultLocale: "en", locales: { en: "en", tr: "tr" } },
    }),
  ],
});
