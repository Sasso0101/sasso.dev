import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: 'https://sasso.dev',
  integrations: [tailwind(), mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
  },
});