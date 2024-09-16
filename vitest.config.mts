import react from "@vitejs/plugin-react"
import { loadEnv } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"
import { configDefaults, defineConfig } from "vitest/config"

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    setupFiles: ["./vitest-setup.ts"],
    coverage: {
      provider: "istanbul", // or 'v8'
      include: ["src/**/*"],
      exclude: ["src/**/*.stories.{js,jsx,ts,tsx}", "**/*.d.ts"],
      reporter: ["html"]
    },
    environment: "jsdom",
    globals: true, // This is needed by @testing-library to be cleaned up after each test
    exclude: [...configDefaults.exclude, "./e2e/*"]
  }
})
