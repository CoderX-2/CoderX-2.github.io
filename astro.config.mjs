import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://coderx-2.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});