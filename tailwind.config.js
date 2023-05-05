/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms'), require('tailwind-nord')],
}
