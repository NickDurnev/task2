const { defineConfig } = require("vite");
const { importMaps } = require("vite-plugin-import-maps");

module.exports = defineConfig({
  plugins: [
    importMaps([
      {
        imports: {
          unpkg: "https://unpkg.com/@nick_durnev/my-lib@1.0.1/dist/my-lib.js",
        },
      },
    ]),
  ],
});
