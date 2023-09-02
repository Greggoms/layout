import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      gridTemplateRows: {
        layout: "min-content 1fr min-content",
      },
      maxHeight: {
        sidebar: "calc(100vh - 50px)", // h-screen minus header height
      },
    },
    plugins: [],
  },
};

export default config;
