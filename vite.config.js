import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import viteCompression from 'vite-plugin-compression';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
      fastRefresh: true,
    }),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240,
      deleteOriginFile: false,
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240,
      deleteOriginFile: false,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@config': path.resolve(__dirname, 'src/config'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'mui-vendor': [
            '@mui/material',
            '@mui/icons-material',
            '@emotion/react',
            '@emotion/styled',
          ],
          'animation-vendor': ['framer-motion'],
          'markdown-vendor': ['marked', 'dompurify'],
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  server: {
    port: 3000,
    host: true,
    strictPort: false,
    open: true,
    cors: true,
  },
  preview: {
    port: 3000,
    strictPort: false,
    open: true,
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@mui/material',
      '@mui/icons-material',
      'zustand',
      'framer-motion',
      'marked',
      'dompurify',
    ],
  },
});
