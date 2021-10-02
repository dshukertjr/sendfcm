module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        DEFAULT: '#1A73E8',
      },
      yellow: {
        DEFAULT: '#FFCD33',
      },
      orange: {
        DEFAULT: '#F68410',
      },
      white: {
        DEFAULT: '#fff'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
