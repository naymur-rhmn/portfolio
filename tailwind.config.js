/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      ibm: '"IBM Plex Mono", monospace',
      ubuntu: "Ubuntu, sans-serif",
      Inter: "Inter, sans-serif",
    },
    // container: {
    //   padding: {
    //     DEFAULT: "1rem",
    //     sm: "2rem",
    //     lg: "4rem",
    //     xl: "5rem",
    //     "2xl": "6rem",
    //   },
    // },
    extend: {
      colors: {
        bg1: "#292F36",
        bg2: "#21272f",
        brand1: "#12F7D6",
        brand2: "#98FAEC",
        grey: "#43454D",
      },
    },
  },
  darkMode: "",
  plugins: [],
};
