export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        vina: ['Vina Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'move-left': 'move-left 0.1s linear infinite',
        'move-right': 'move-right 1s linear infinite'
      },
      keyframes: {
        'move-left': {
          '0%': {
            transform: 'translateX(0%)'
          },
          '100%': {
            transform: 'translateX(-50%)'
          }
        },
        'move-right': {
          '0%': {
            transform: 'translateX(-50%)'
          },
          '100%': {
            transform: 'translateX(0%)'
          }
        }
      },
      colors: {
        dark: {
          text: "#ffffff",
          background: "#000000",
          primary: "#1c1c1c",
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
