import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@mui/material',
      '@mui/system',
      '@emotion/react',
      '@emotion/styled',
      '@monaco-editor/react'
    ]
  },
  server: {
    force: true,
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/]
    }
  }
});