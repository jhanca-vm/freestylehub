import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { '@': 'src' } },
  test: {
    environment: 'jsdom',
    reporters: 'verbose'
  }
})
