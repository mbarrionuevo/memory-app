import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default () => {
  return defineConfig({
    plugins: [react()],
    server: {
      open: true,
    },
    resolve: {
      alias: {
        components: path.resolve(process.cwd(), './src/components'),
        hooks: path.resolve(process.cwd(), './src/hooks'),
        services: path.resolve(process.cwd(), './src/services'),
      },
    },
  });
};
