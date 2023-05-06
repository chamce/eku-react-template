import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// Uncomment lines above plugins to deploy build outside of root directory

// https://vitejs.dev/config/
export default defineConfig({
  // // Produces relative links to assets in your index.html
  // base: './',
  // build: {
  //   // By default, Vite will empty the outDir on build if it is inside project root. It will emit a warning if outDir is outside of root to avoid accidentally removing important files. You can explicitly set this option to suppress the warning. This is also available via command line as --emptyOutDir
  //   emptyOutDir: true,
  //   // Specify the output directory (relative to project root)
  //   outDir: "Y:/Your/Build/Directory"
  // },
  plugins: [react(), eslint()],
});