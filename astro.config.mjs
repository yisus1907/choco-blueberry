import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yisus1907.github.io',
  base: process.env.VERCEL ? '/' : '/choco-blueberry/',
});