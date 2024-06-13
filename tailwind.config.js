/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {

      fontFamily: {
        'permanent-marker': ['Permanent Marker', 'cursive'],
        'yatra-one': ['Yatra One', 'sans-serif'],
      },

      colors: {
        'my-hot': '#9d0208',
        'my-red': '#d00000',
        'my-orange': '#e74c3c',
        'my-yellow': '#ffba08',
        'my-gold': '#c59d5f',
      },
    },
  },
  plugins: [],
}

