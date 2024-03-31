/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        defaultColor: '#006241',
        /* error: plataformSelect({
          ios: 'plataformColor(SystemRed)',
          android: 'plataformColor(?android:colorError)',
          defaultColor: 'red' 
        })*/
      }
    },
  },
  plugins: [],
}

