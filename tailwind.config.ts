import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        header: ["SF-Pro-Display", "sans-serif"],
        main: ["var(--font-garamond)", "sans-serif"],
        title: ["var(--font-garamond)", "sans-serif"],
        body: ["SF-Pro-Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
