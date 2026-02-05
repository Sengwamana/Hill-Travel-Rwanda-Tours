/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lexend', 'sans-serif'],
        body: ['Noto Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        forest: {
          DEFAULT: '#2D5A27',
          light: '#3E7B36',
          dark: '#1A3317',
        },
        sandstone: {
          DEFAULT: '#F4F1EA',
          dark: '#E8E3D9',
        },
        earth: {
          DEFAULT: '#4A3728',
          light: '#6B503B',
        },
        sage: '#8BA888',
      }
    },
  },
  plugins: [],
}
