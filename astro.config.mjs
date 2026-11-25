import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://coderx-2.github.io',
  integrations: [tailwind()],
});