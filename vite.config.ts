import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      // src/index.ts is where we have exported the component(s)
      entry: resolve(__dirname, "src/index.ts"),
      name: "ArturComponentLibrary",
      // the name of the output files when the build is run
      fileName: "art-ui-lib",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build (UMD means Universal Module Definition) for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
