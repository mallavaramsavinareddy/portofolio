import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Use "/" for Vercel/Netlify. For GitHub Pages project site, change to "/portfolio/".
  base: "/",
});
