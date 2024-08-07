import { defineConfig } from 'astro/config';
import transformImportPlugin from './vite-plugin';
import Inspect from 'vite-plugin-inspect'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      Inspect(),
      transformImportPlugin()
    ]
  },
  devToolbar: {
    enabled: false
  }
});
