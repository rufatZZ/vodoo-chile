import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [tsconfigPaths(), svgr()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    coverage: {
      provider: "v8",
      include: ["src/utils/**", "src/components/**"],
      exclude: ["src/components/**/index.tsx"],
    },
  },
});
