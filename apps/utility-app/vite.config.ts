import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'utility_app',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/components/Button/Button.tsx',
        './Card': './src/components/Card/Card.tsx',
        './Input': './src/components/Input/Input.tsx',
        './Modal': './src/components/Modal/Modal.tsx',
        './Table': './src/components/Table/Table.tsx',
        './Tabs': './src/components/Tabs/Tabs.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    port: 5001,
    strictPort: true,
    cors: true,
  },
  preview: {
    port: 5001,
    strictPort: true,
    cors: true,
  },
});
