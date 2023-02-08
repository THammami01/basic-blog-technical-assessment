import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    base: env.ASSET_URL || '/',
    build: {
      sourcemap: command === 'build' ? false : true,
    },
    experimental: {
      renderBuiltUrl(filename: string) {
        if (filename === 'config/config.js') {
          return '/' + filename;
        }
      },
    },
    plugins: [react()],
    optimization: {
      chunk: false,
      scopeHoisting: false,
    },
    entry: 'src/main.tsx',
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
    server: {
      host: true,
      open: false,
      port: 3000,
    },
  };
});
