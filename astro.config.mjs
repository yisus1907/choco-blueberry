import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://yisus1907.github.io',
  base: process.env.VERCEL ? '/' : '/choco-blueberry/',
  vite: {
    plugins: [tailwindcss()],
  },
});