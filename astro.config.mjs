// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://neosapien.xyz',
  compressHTML: true,
  // Allow serving node_modules from the parent repo when running inside a git worktree.
  vite: { server: { fs: { strict: false } } },
});
