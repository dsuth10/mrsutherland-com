import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        // Configure for WordPress embedding
        outDir: 'dist',
        assetsDir: 'assets',
        // Build as self-contained bundle for WordPress
        rollupOptions: {
          output: {
            // Use IIFE format for easier WordPress embedding
            format: 'iife',
            name: 'FloodingSorterApp',
            // Bundle everything including React for self-contained app
          }
        }
      }
    };
});
