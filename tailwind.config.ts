import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        genesis: {
          navy: "#2E4057",     // Base navy from the logo
          dark: "#1A2534",     // Darker shade for backgrounds
          darker: "#0d131b",   // Almost black for main dark theme
          orange: "#F28C28",   // Orange from the logo
          light: "#EAEAEA"     // Light grey for text
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['var(--font-inter)'], // We'll set this up in layout
      }
    },
  },
  plugins: [],
};
export default config;
