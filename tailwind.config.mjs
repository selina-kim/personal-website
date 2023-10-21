/** @type {import('tailwindcss').Config} */

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
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "2000px",
      },
    },
  },
  plugins: [],
};
