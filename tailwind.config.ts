import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Light mode (daytime ocean)
        "ocean-sky": "#B8E4F9",
        "ocean-seafoam": "#7ECECA",
        "ocean-teal": "#1A8FA0",
        "ocean-sapphire": "#0D3B6E",
        "ocean-sand": "#F5E6C8",
        // Dark mode (nighttime ocean)
        "ocean-midnight": "#050D1A",
        "ocean-deep": "#0A1F3D",
        "ocean-bio-teal": "#00C9A7",
        "ocean-moonlit": "#1C3A5E",
        "ocean-glow": "#FFD580",
      },
      fontFamily: {
        display: ["Outfit", "sans-serif"],
        body: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;