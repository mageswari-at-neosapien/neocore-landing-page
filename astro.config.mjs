// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Replace with the real production domain before launch.
  site: 'https://your-production-domain.example',
  compressHTML: true,
  // Allow serving node_modules from the parent repo when running inside a git worktree.
  vite: { server: { fs: { strict: false } } },
});
