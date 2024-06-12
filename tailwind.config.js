/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'hot': '#9d0208',
        'red': '#d00000',
        'orange': '#e74c3c',
        'yellow': '#ffba08',
      },
    },
  },
  plugins: [],
}

