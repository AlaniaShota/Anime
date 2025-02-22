/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "4xl": "4px -127px 98px 8px rgba(0,0,0,0.75) inset",
        webkit: "4px -127px 98px 8px rgba(0,0,0,0.75) inset",
        top: "0 -4px 6px -1px rgba(0,0,0,0.1), 0 -2px 4px -1px rgba(0,0,0,0.06)",
        moz: "4px -127px 98px 8px rgba(0,0,0,0.75) inset",
      },
      colors: { test: "linear-gradient(180deg, #0000, #232323);" },
      zIndex: {
        100: "100",
      },
      aspectRatio: {
        square: "1 / 1",
      },
      columns: {
        "3xs": "10rem", // Define your own value for '3xs' if it doesn't exist
      },
    },
  },
  variants: {
    aspectRatio: ["responsive"],
    columns: ["responsive"],
  },
  plugins: [],
};
