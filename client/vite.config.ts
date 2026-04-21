import { defineConfig } from 'vite';

export default defineConfig({
  // Base path vacío para deploy en raíz (Netlify, Vercel, etc.)
  // Si despliegas en un subdirectorio específico, cambia esto
  base: '/',
  build: {
    // Genera sourcemaps para debugging (desactívalos en producción si quieres)
    sourcemap: false,
  },
});