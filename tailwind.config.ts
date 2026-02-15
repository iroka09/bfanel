import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
          fixed: "var(--primary-fixed)",
          dark: "var(--primary-dark)"
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          fixed: "var(--secondary-fixed)",
          light: "var(--secondary-light)",
          dark: "var(--secondary-dark)"
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
