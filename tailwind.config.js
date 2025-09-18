/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customPurple: "#6931CF",
        customBlue: "#1A61EA",
      },
       keyframes: {
        'pulse-slow': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        }
      },
      animation: {
        'pulse-slow': 'pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};