const colors = require("tailwindcss/colors");

module.exports = {
  safelist: [
    "bg-yellow-600",
    "bg-indigo-600",
    "bg-gray-600",
    "text-indigo-500",
    "text-violet-500",
    "border-red-500",
    "border-indigo-500",
    "border-green-500",
    "border-violet-500",
  ],
  content: ["./src/components/*.jsx", "./src/pages/*.js"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["poppins", "sans-serif"],
    },
    colors: {
      orange: colors.orange,
      white: colors.white,
      gray: colors.gray,
      black: colors.black,
      yellow: colors.yellow,
      indigo: colors.indigo,
      green: colors.green,
      red: colors.red,
      blue: colors.blue,
      violet: colors.violet,
    },
  },
  variants: {},
  plugins: [],
};
