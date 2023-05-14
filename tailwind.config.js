module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'tcprimary': '#b7a05e'
      },
      maxWidth: {
        'cust': '25%',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}