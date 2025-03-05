import path from "path"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  server: {
    host: true, // Permite acceder desde cualquier IP
    strictPort: true,
    port: 5173, // Asegura que Vite use este puerto
    allowedHosts: true // Permite cualquier host externo
  }
})
