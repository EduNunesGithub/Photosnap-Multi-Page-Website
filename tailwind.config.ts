import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "light-grey": "#DFDFDF",
        "pure-black": "#000000",
        "pure-white": "#FFFFFF",
      },
      fontFamily: {
        "dm-sans": "var(--font-dm-sans)",
      },
      inset: {
        18: "4.5rem",
      },
      maxWidth: {
        "page-container": "69.375rem",
      },
      minHeight: {
        18: "4.5rem",
      },
      transitionDuration: {
        "emphasized-accelerate": "200ms",
        "emphasized-decelerate": "400ms",
        standard: "300ms",
      },
      transitionTimingFunction: {
        "emphasized-accelerate": "cubic-bezier(0.3, 0.0, 0.8, 0.15)",
        "emphasized-decelerate": "cubic-bezier(0.05, 0.7, 0.1, 1.0)",
        standard: "cubic-bezier(0.2, 0.0, 0, 1.0)",
      },
    },
    screens: {
      sm: "0px",
      md: "641.25px",
      lg: "907.5px",
    },
  },
  plugins: [],
};

export default config;
