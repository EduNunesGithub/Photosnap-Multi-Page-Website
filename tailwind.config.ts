import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "0px",
      md: "641.25px",
      lg: "907.5px",
    },
  },
  plugins: [],
};

export default config;
