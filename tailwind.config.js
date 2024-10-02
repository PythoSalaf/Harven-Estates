/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2E7DD7",
        grayPrimary: "#4B5563",
        graySecondary: "#E5E7EB",
      },
    },
  },
  plugins: [],
};
