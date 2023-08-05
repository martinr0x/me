const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    fontSize: {
      sm: '14px',
      base: '16px',
      xl: '20px',
      '2xl': '20px',
      '3xl': '24px',
      '4xl': '32px',
      '5xl': '40px',
      '6xl': '48px',
    },
    extend: {
      colors: {
        primary: "#4C47E0",
        blue: "#4C47E0",
        secondary: "#130F61",
        tertiary: "#E8EAF5"
      },
      // fontFamily: {
      //   'inter': ['Inter']
      // },
    },
  },
  plugins: [
    require('tailwind-fontawesome')
  ],
};
