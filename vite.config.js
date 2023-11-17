import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  publicDir: '/usuario00/',
  server: {
    port: 3128 ,
  },
  build: {
    target: 'esnext',
  },
});
