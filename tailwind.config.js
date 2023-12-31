/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      Background: '#d8eefe',
      Headline: '#094067',
      SubHeadline: '#5f6c7b',
      CardBackground: '#fffffe',
      CardHeading: '#094067',
      CardParagraph: '#5f6c7b',
      Stroke: '#094067',
      Main: '#fffffe',
      Highlight: '#3da9fc',
      Secondary: '#90b4ce',
      Tertiary: '#ef4565'
    },
    extend: {},
  },
  plugins: [],
}

