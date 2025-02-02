/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      ibm: '"IBM Plex Mono", monospace',
      Inter: "Inter, sans-serif",
      ZenTokyo: '"Zen Tokyo Zoo", serif',
      Lancelot: "Lancelot, serif",
    },
    extend: {
      colors: {
        bg1: "#292F36",
        bg2: "#21272f",
        brand1: "#12F7D6",
        brand2: "#98FAEC",
        brand3: "#11C175",
        grey: "#43454D",
        dbBg1: "#1C1D21",
        dbBg2: "#030303",
      },
    },
  },
  darkMode: "",
  plugins: [],
};
