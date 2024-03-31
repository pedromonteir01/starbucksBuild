/** @type {import('tailwindcss').Config} */

const { plataformSelect } = require('nativewind');

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        default: '#006241',
        error: plataformSelect({
          ios: 'plataformColor(SystemRed)',
          android: 'plataformColor(?android:colorError)',
          default: 'red'
        })
      }
    },
  },
  plugins: [],
}

