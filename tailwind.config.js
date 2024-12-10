/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        '3xl': '1920px'
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem'
      },
      colors: {
        primary: {
          50: '#f3e8ff',
          100: '#e9d5ff',
          200: '#d8b4fe',
          300: '#c084fc',
          400: '#a855f7',
          500: '#8b31e3',
          600: '#6310a1',
          700: '#570d91',
          800: '#4a0a7b',
          900: '#3a0764',
        },
        dark: {
          50: '#f8f9fa',
          100: '#edf0f2',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#2a2d35',
          600: '#1f2128',
          700: '#17181d',
          800: '#0f1012',
          900: '#000000',
        }
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
          '3xl': '1920px'
        }
      },
      boxShadow: {
        'inner-glow': 'inset 0 0 20px rgba(255, 255, 255, 0.15)',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};