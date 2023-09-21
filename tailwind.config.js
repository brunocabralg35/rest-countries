/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'darkBlue': 'hsl(209, 23%, 22%)',
      'darkerBlue': 'hsl(207, 26%, 17%)',
      'veryDarkBlue': 'hsl(200, 15%, 8%)',
      'darkGray': 'hsl(0, 0%, 52%)',
      'lightGray': 'hsl(0, 0%, 98%)',
      'whitey': 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      nunito: ['Nunito Sans', 'sans-serif'],
    },
    extend: {
      spacing: {
        '128': '32rem'
      }
    },
  },
  plugins: [],
}