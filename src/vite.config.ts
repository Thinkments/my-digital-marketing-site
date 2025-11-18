import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

// Plugin to copy static files to dist
const copyStaticFilesPlugin = () => {
  return {
    name: 'copy-static-files',
    closeBundle() {
      const publicDir = path.resolve(__dirname, 'public');
      const distDir = path.resolve(__dirname, 'dist');

      // Files to copy directly to dist root
      const staticFiles = ['robots.txt', 'sitemap.xml', 'llm.txt'];

      staticFiles.forEach((file) => {
        const src = path.join(publicDir, file);
        const dest = path.join(distDir, file);

        if (fs.existsSync(src)) {
          fs.copyFileSync(src, dest);
          console.log(`✅ Copied ${file} to dist`);
        } else {
          console.warn(`⚠️  ${file} not found in public/`);
        }
      });
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), copyStaticFilesPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    // Disable modulepreload to prevent "preload not used" warnings
    modulePreload: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    port: 3000,
    strictPort: false,
    host: true,
  },
});
