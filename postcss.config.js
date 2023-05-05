/** @type {import('postcss-load-config').Config} */
const config = {
  syntax: 'postcss-scss',
  plugins: [require('postcss-import'), require('tailwindcss'), require('autoprefixer')],
}

module.exports = config
