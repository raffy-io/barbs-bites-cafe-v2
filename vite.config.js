import { defineConfig } from "vite";
import { resolve } from "node:path";
import injectHTML from "vite-plugin-html-inject";

export default defineConfig({
  plugins: [injectHTML()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        products: resolve(__dirname, "products/index.html"),
        product: resolve(__dirname, "product/index.html"),
        order: resolve(__dirname, "order/index.html"),
      },
    },
  },
});
