import type { Config } from "tailwindcss";
import tailwindtypo from "@tailwindcss/typography";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  future: {
    disableColorOpacityUtilitiesByDefault: true,
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100ch", // add required value here
          },
        },
      },
      fontFamily: {
        timesnewroman: ["timesnewroman", "serif"],
      },
    },
  },
  plugins: [tailwindtypo],
} satisfies Config;
