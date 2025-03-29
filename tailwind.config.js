/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"], // Custom font
      },

      colors: {
        lightGreen: "#CAFF33",
        darkGreen: "#22251B",
        darkGray: "#1A1A1A",
        gray: "#1C1C1C",
        lightGray: "#262626",
        white: "#FFFFFF",
        textGray: "#B3B3B3",
      },

      fontSize: {
        h1: "48px",   // Titles
        h2: "38px",
        h3: "28px",
        bodyLg: "18px", // Body text
        bodyMd: "16px",
        bodySm: "14px",
      },

      borderRadius: {
        main: "20px",
      },

      spacing: {
        41: "162px", // Custom spacings
        37: "150px",
        31: "120px",
        50: "50px",
        30: "30px",
      },

      screens: {
        xs: "390px",  // Extra Small
        md: "992px",  // Medium
        lg: "1440px", // Large
        xl: "1920px", // Extra Large
      },
    },
  },
  plugins: [],
};