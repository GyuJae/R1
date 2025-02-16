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
    setupFiles: ['./tests/setup-tests.ts'],
    environment: 'jsdom',
    globals: true,
    env: {
      DATABASE_URL: 'postgres://r1_test:r1_test@localhost:5433/r1_test',
    },
  },
});
