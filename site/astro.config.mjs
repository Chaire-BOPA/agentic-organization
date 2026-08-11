import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.chaire-bopa.com',

  // The design tokens live outside site/ (in source/brand/), so allow the dev
  // server to read one level up.
  vite: { server: { fs: { allow: ['..'] } } },
});
