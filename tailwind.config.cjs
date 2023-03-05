const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html"],
  theme: {
    colors: {
      primary: "#0d0d0d",
      secondary: "#D3D3D2",
      success: "#75B240",
      fail: "#da4025",
      footerBg: "#F7F6F5",
      buttonBg: "#FDFDFD",
    },
    screens: {
      xs: "400px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      transitionDuration: { 200: "200ms" },
      transitionProperty: {},
    },
  },
  variants: {
    extend: { texColor: ["responsive", "hover", "focus", "focus-within"] },
  },
  plugins: [
    plugin(function ({ addBase, pointer }) {
      addBase({
        button: { cursoir: pointer },
      });
    }),
  ],
};
