import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      $: "/src",
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
});
