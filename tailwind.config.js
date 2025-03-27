/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        lightGreen: "#CAFF33",
        darkGreen: "#22251B",
        darkGray: "#1A1A1A",
        gray: "#1C1C1C",
        lightGray: "#262626",
        white: "#FFFFFF",
        textGray: "#B3B3B3",
      },
    },
    screens: {
      xs: "390px",  // Extra Small
      md: "992px",  // Medium
      lg: "1440px", // Large
      xl: "1920px", // Extra Large
    }
  },
  plugins: [],
}

