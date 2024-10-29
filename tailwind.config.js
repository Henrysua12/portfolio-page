/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-smoke': '#F5F5F5',
        'secondary' : '#FF6987',
        'wenge' : '#5F4466',
        'black' : '#000000',
        'bittersweet' : '#E26D5C',
        'bright-wenge': '#7a6a68',
        'teal' : '#81CDC6'
      },
    },
  },
  plugins: [],
}

