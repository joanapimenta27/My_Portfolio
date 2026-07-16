/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#FFF0F7',
          100: '#FFE3F1',
          200: '#FFC6E4',
          300: '#FF9ED3',
          400: '#FF77C2',
          500: '#FF4DB1',
          600: '#E6399D',
          700: '#CC2689',
          800: '#B31375',
          900: '#990061',
          950: '#66003F',
        },
        accent: {
          50: '#FFF0F7',
          100: '#FFE3F1',
          200: '#FFC6E4',
          300: '#FF9ED3',
          400: '#FF77C2',
          500: '#FF4DB1',
          600: '#E6399D',
          700: '#CC2689',
          800: '#B31375',
          900: '#990061',
          950: '#66003F',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'float-delayed': 'float-delayed 7s ease-in-out infinite 1s',
        'fade-in': 'fadeIn 1s ease-in-out',
        'fade-in-slow': 'fadeIn 2s ease-in-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};