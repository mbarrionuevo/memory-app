import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default () => {
  return defineConfig({
    plugins: [react()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./src/test/setup.ts'],
    },
    server: {
      open: true,
    },
    resolve: {
      alias: {
        pages: path.resolve(process.cwd(), './src/pages'),
        components: path.resolve(process.cwd(), './src/components'),
        hooks: path.resolve(process.cwd(), './src/hooks'),
        services: path.resolve(process.cwd(), './src/services'),
        utils: path.resolve(process.cwd(), './src/utils'),
        constants: path.resolve(process.cwd(), './src/constants'),
      },
    },
  });
};
