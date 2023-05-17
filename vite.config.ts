import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import unocss from 'unocss/vite'

export default defineConfig({
  plugins: [
    sveltekit(),
    unocss({ extraContent: { filesystem: ['src/app.html'] } })
  ],
  server: { host: true, port: 3000 }
})
