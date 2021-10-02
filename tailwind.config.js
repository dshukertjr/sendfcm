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
    },
    boxShadow: {
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      yellow: '0 0 6px #FFCD33',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
