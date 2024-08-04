/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            p: {
              color: theme("colors.gray.100"),
              fontSize: theme("fontSize.lg"),
              // fontWeight: theme("fontWeight.light"),
            },
            li: {
              color: theme("colors.gray.100"),
            },
            a: {
              color: theme("colors.rose.500"),
              fontWeight: "bold",
            },
            blockQuote: {
              borderLeftWidth: "1px",
              borderColor: theme("colors.gray.600"),
            },
            pre: {
              backgroundColor: theme("colors.gray.800"),
            },
          },
        },
        lg: {
          css: {
            p: {
              fontSize: theme("fontSize.xl"),
            },
          },
        },
        // xl: {
        //   css: {
        //     p: {
        //       fontSize: theme("fontSize.7xl"),
        //     },
        //   },
        // },
      }),
      textShadow: {
        shine: "0 1px 0 rgba(255, 255, 255, 0.2)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      typography: ["responsive"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
