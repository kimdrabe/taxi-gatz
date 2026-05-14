import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://kimdrabe.github.io',
  base: '/taxi-gatz/',
  integrations: [tailwind()],
  build: {
    assets: '_assets',
  },
});
