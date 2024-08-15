// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      colors: {
        blue: {
          800: '#1E40AF',
        },
        purple: {
          700: '#6D28D9',
        },
      },
    },
  },
  plugins: [],
}
