/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ✅ ini penting untuk aktifkan dark mode manual
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
