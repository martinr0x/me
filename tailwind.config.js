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
    
    extend: {
      colors: {
        primary: "#4C47E0",
        blue: "#4C47E0",
        secondary: "#130F61",
        tertiary: "#E8EAF5"
      },
    },
  },
  plugins: [],
};
