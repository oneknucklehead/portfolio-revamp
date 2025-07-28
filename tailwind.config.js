export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        vina: ['Vina Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        dark: {
          text: "#ffffff",
          background: "#000000",
          primary: "#0D0D0D",
          secondary: "#53D364",
        },
        light: {
          text: "#ffffff",
          background: "#9FD7DF",
          primary: "#1B3654",
          secondary: "#119FB1",
        }

      }
    },
  },
  plugins: [],
};
