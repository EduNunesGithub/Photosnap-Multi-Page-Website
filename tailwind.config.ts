import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      borderWidth: {
        1: "0.0625rem",
      },
      colors: {
        "light-grey": "#DFDFDF",
        "pure-black": "#000000",
        "pure-white": "#FFFFFF",
      },
      fontFamily: {
        "dm-sans": "var(--font-dm-sans)",
      },
      height: {
        18: "4.5rem",
      },
      inset: {
        18: "4.5rem",
        34: "8.5rem",
      },
      margin: {
        18: "4.5rem",
        21: "5.25rem",
        30: "7.5rem",
      },
      maxWidth: {
        98: "24.5rem",
        100: "25rem",
        "page-container": "69.375rem",
      },
      minHeight: {
        18: "4.5rem",
        125: "31.25rem",
      },
      padding: {
        18: "4.5rem",
        17: "4.25rem",
        23: "5.75rem",
        30: "7.5rem",
        34: "8.5rem",
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
      width: {
        18: "4.5rem",
        35: "8.75rem",
      },
    },
    screens: {
      sm: "0px",
      md: "641.25px",
      lg: "907.5px",
    },
  },
  plugins: [
    plugin(({ addBase, addComponents }) => ({
      addComponents: addComponents({
        ".banner-gradient": {},
        ".story-gradient": {},
        ".story-gradient-decoration": {},
        ".text-body": {},
        ".text-H1-H2": {},
        ".text-H1-H2-desktop": {},
        ".text-H3": {},
        ".text-H4": {},
      }),
    })),
  ],
};

export default config;
