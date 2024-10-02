/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2E7DD7",
        grayPrimary: "#4B5563",
        graySecondary: "#E5E7EB",
        blue: "#2161AA",
        gray: "#374151",
        ash: "#F9FAFB",
      },
      fontSize: {
        60: "64px",
        40: "40px",
        24: "24px",
        16: "16px",
        20: "20px",
      },
    },
  },
  plugins: [],
};
