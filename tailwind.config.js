/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bluebg: '#050c1a',
        bluecard: '#1d2e4e'
      },
      fontFamily: {
        baloo400: ['Baloo400', 'sans-serif'],
        baloo500: ['Baloo500', 'sans-serif'],
        baloo600: ['Baloo600', 'sans-serif'],
        monserrat200: ['Monserrat200', 'sans-serif'],
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwindcss-animated')
  ],
}

