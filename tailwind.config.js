/** @type {import('tailwindcss').Config} */
import withMT from '@material-tailwind/react/utils/withMT'
export default withMT({
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bluebg: '#0D182D',
        bluecard: '#2B426F'
      },
      fontFamily: {
        baloo400: ['Baloo400', 'sans-serif'],
        baloo500: ['Baloo500', 'sans-serif'],
        monserrat200: ['Monserrat200']
      }
    }
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwindcss-animated')
  ]
})
