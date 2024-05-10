import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes("firebase/auth")) {
            return "@firebase-auth-vendor";
          }
          if (id.includes("react-hook-form") || id.includes("zod")) {
            return "@form-vendor";
          }
        },
      },
    },
  },
});
