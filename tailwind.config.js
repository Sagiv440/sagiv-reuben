module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#021526',
        secondary: '#6EACDA',
        tertiary: '#03346E',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#F5EFE7',
      },
      boxShadow: {
        card: '0 35px 120px -15px #322F4E',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        'hero-pattern': `url(/herobg.png)`,
      },
    },
  },
  plugins: [],
};
