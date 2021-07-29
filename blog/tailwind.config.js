module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

// tailwind.config.js
const { colors: defaultColors } = require("tailwindcss/defaultTheme");

const colors = {
  ...defaultColors,
  ...{
    "sky-blue": {
      500: "#AACEDE",
    },
    "mint-green": {
      500: "#E2EFEB",
      600: "#c5e0d7",
    },
    "custom-grey": {
      500: "#F4F4F4",
    },
    "heading-green": {
      500: "#117C7B",
    },
  },
};

module.exports = {
  theme: {
    colors: colors,
  },
};
