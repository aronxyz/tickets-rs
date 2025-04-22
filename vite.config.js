import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {}, // <- This fixes the "process is not defined" error
  },
  server: {
    port: 3000
  }
});
