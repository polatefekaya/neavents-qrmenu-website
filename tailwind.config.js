/** @type {import('tailwindcss').Config} */
import { Config } from 'tailwindcss';

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-lime': {
          '50': "#f7fee7",
          '100': "#ecfccb",
          '200': "#d9f99d",
          '300': "#bef264",
          '400': "#a3e635",
          '500': "#84cc16",
          '600': "#65a30d",
          '700': "#4d7c0f",
          '800': "#3f6212",
          '900': "#365314",
          '950': "#1a2e05",
        },

        background: "var(--background)",
        foreground: {
          DEFAULT: "var(--foreground)",
          secondary: "var(--foreground-secondary)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};