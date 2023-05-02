/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E92",
        primaryDark: "#58E6D9",
      },
    },
    screens: {
      "2xl": { max: "1535px" }, // => @media(max-width: 1535px)
      xl: { max: "1023px" },
      md: { max: "767px" }, // => @media(max-width: 757px)
      sm: { max: "639px" },
      xs: { max: "479px" },
    },
  },
  plugins: [],
};
