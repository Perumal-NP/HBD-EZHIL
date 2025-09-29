import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins:[react()],
  // GitHub Pages configuration - proper base path handling
  base: process.env.VITE_BASE_PATH || '/',
});
