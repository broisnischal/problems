import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        timesnewroman: ["timesnewroman", "serif"],
      }
    },
  },
  plugins: [],
} satisfies Config;
