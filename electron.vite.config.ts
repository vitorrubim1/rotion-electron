import path, { resolve } from "path";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import tsconfigPaths from "vite-tsconfig-paths";

const tsconfigPathsPlugin = tsconfigPaths({
  projects: [path.resolve("tsconfig.json")],
});

export default defineConfig({
  main: {
    plugins: [tsconfigPathsPlugin, externalizeDepsPlugin()],
    publicDir: path.resolve("resources"),
  },
  preload: {
    plugins: [tsconfigPathsPlugin, externalizeDepsPlugin()],
  },
  renderer: {
    define: {
      "process.platform": JSON.stringify(process.platform),
    },
    resolve: {
      alias: {
        "@renderer": resolve("src/renderer/src"),
        "@shared": resolve("src/shared"),
      },
    },
    plugins: [tsconfigPathsPlugin, react()],
    css: {
      postcss: {
        plugins: [
          tailwindcss({
            config: "./src/renderer/tailwind.config.js",
          }),
        ],
      },
    },
  },
});
