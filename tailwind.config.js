/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/*.html'
  ],
  theme: {
    extend: {
      colors:{
        'prototurk':'#32445a'
      },
      spacing:{
        '15':'3.75rem'
      }
    },
  },
  plugins: [],
}
