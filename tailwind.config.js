/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{html,ts}",

  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        'color-dark-green' : '#64892f',
        'color-light-green' : '#86c232',
        'color-base-dark' : '#222629',
        'color-base-dark-bg' : '#2f3336',
        'color-dark-grey' : '#474b4f',
        'color-light-grey': '#6B6E70',
        'color-light-base': '#ffffff',
        'color-light-pink': '#ffccbc',
        'color-light-blue': '#d3e3fc',
        'color-light-blue-dark': '#77a6f7',
      }
    },

  },
  plugins: [],
  darkMode: 'class'
}
