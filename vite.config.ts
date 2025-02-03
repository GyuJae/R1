import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tailwindcss(), !process.env.VITEST && reactRouter(), tsconfigPaths()],
  build: {
    cssMinify: true,
    ssr: false,
  },
  test: {
    environment: 'jsdom',
    globals: true,
    env: {
      // TODO Replace Test Database URL
      DATABASE_URL: 'postgres://r1:r1@localhost:5432/r1',
    },
  },
});
