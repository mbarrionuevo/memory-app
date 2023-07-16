/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        wide: {
          raw: `only screen and (max-height: 865px) and (min-width: 667px)`,
        },
        landscape: {
          raw: '(orientation: landscape)',
        },
      },
    },
  },
  plugins: [],
};
