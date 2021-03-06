module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'max-height'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
