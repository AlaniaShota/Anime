/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "4xl": "3px -82px 229px 17px rgba(0,0,0,0.75)",
        "shadow-webkit": "3px -82px 229px 17px rgba(0,0,0,0.75)",
        'top': "0 -4px 6px -1px rgba(0,0,0,0.1), 0 -2px 4px -1px rgba(0,0,0,0.06)",
        "shadow-moz": "3px -82px 229px 17px rgba(0,0,0,0.75)",
      },
    },
  },
  plugins: [],
};
