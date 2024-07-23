module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#3490dc',
          secondary: '#6574cd',
        },
        dark: {
          primary: '#38a169',
          secondary: '#718096',
        },
      },
    },
  },
  variants: {
    extend: {
      brightness: ['dark'],
    },
  },
  plugins: [],
};
