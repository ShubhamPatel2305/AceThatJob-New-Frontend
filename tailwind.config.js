/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {fontFamily: {
      sans: ['Ppobjectsans', 'sans-serif'],
    },
    colors: {
      customColor: '#222222', // Adding custom color
      vio: '#7D34B5',
      btngray: '#E6ECF1',
    },
  },
  },
  plugins: [],
}

