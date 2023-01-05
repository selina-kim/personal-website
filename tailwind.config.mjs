/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          gray: "var(--light-gray)",
          main: "var(--light-main)",
        },
        dark: {
          gray: "var(--dark-gray)",
          main: "var(--dark-main)",
        },
        accent: {
          primary: "var(--accent-primary)",
          secondary: "var(--accent-secondary)",
        },
      },
      backgroundImage: {
        "accent-gradient": "var(--accent-gradient)",
      },
      fontFamily: {
        sans: ["Red Hat Display", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
