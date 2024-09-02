import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import Markdown from "vite-plugin-md";
import MarkdownItAnchor from "markdown-it-anchor";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    Markdown({
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
      markdownItSetup(md) {
        // add anchor links to your H[x] tags
        md.use(MarkdownItAnchor);
      },
    }),
  ],
});
