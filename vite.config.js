import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import base: '/altera/'

export default defineConfig({
  plugins: [react(), tailwindcss()],
});