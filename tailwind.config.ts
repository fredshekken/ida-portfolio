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
        surface: "#0a0e1a",
        "surface-mid": "#0f1726",
        "surface-light": "#162033",
        accent: "#4fc3d4",
        "accent-warm": "#e8834a",
        text: "#e0eaf5",
        muted: "#5a7a96",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
    },
  },
  plugins: [],
};

export default config;