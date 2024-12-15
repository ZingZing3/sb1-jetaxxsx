/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F3E5FF',
          100: '#E6CCFF',
          200: '#CC99FF',
          300: '#B366FF',
          400: '#9933FF',
          500: '#4B0082',
          600: '#3D006B',
          700: '#2E0054',
          800: '#20003D',
          900: '#110026'
        },
        secondary: {
          50: '#FFE5E9',
          100: '#FFCCD3',
          200: '#FF99A7',
          300: '#FF667B',
          400: '#FF334F',
          500: '#DC143C',
          600: '#B31030',
          700: '#8A0C24',
          800: '#610818',
          900: '#38040C'
        },
        accent: {
          50: '#E5F7ED',
          100: '#CCF0DB',
          200: '#99E1B7',
          300: '#66D293',
          400: '#33C36F',
          500: '#50C878',
          600: '#41A362',
          700: '#327E4B',
          800: '#235935',
          900: '#14331E'
        },
        lavender: {
          50: '#FFFFFF',
          100: '#F7F5FF',
          200: '#EFEAFF',
          300: '#E6E6FA',
          400: '#D8D8F0',
          500: '#CACAE6',
          600: '#B1B1CC',
          700: '#9999B3',
          800: '#808099',
          900: '#666680'
        },
        charcoal: {
          50: '#F5F6F7',
          100: '#EBEDEF',
          200: '#D6DBDF',
          300: '#C2C9CF',
          400: '#ADB7BF',
          500: '#36454F',
          600: '#2B3740',
          700: '#202931',
          800: '#161C22',
          900: '#0B0E13'
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class'
    })
  ]
};