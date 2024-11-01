import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(path.resolve('./certificates/privkey1.pem')),
      cert: fs.readFileSync(path.resolve('./certificates/cert1.pem')),
    },
    host: true,
  },
})