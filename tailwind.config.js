/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'g-blue': {
          DEFAULT: '#4285F4',
          light: '#7BAAF7',
          dark: '#3367D6',
          gradient: '#6EA8FF',
        },
        'g-green': {
          DEFAULT: '#34A853',
          light: '#5BB974',
          dark: '#1E8E3E',
          gradient: '#4ADE80',
        },
        'g-red': '#EA4335',
        'g-yellow': '#FBBC04',
        'g-purple': {
          light: '#A78BFA',
          DEFAULT: '#8B5CF6',
          dark: '#7C3AED',
        },
        'g-gray': {
          50: '#F8F9FA',
          100: '#F1F3F4',
          200: '#E8EAED',
          300: '#DADCE0',
          400: '#BDC1C6',
          500: '#9AA0A6',
          600: '#5F6368',
          700: '#3C4043',
          800: '#202124',
        },
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
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
      },
    },
  },
  plugins: [],
};