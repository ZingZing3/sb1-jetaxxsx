export const colors = {
  primary: {
    50: '#F3E5FF',
    100: '#E6CCFF',
    200: '#CC99FF',
    300: '#B366FF',
    400: '#9933FF',
    500: '#4B0082', // Deep Aubergine Purple
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
    500: '#DC143C', // Vibrant Scarlet Red
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
    500: '#50C878', // Emerald Green
    600: '#41A362',
    700: '#327E4B',
    800: '#235935',
    900: '#14331E'
  },
  lavender: {
    50: '#FFFFFF',
    100: '#F7F5FF',
    200: '#EFEAFF',
    300: '#E6E6FA', // Soft Lavender
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
    500: '#36454F', // Charcoal Black
    600: '#2B3740',
    700: '#202931',
    800: '#161C22',
    900: '#0B0E13'
  }
} as const;

export const gradients = {
  primary: {
    base: 'bg-gradient-to-b from-primary-500 via-charcoal-500 to-primary-500',
    hover: 'hover:from-primary-600 hover:via-charcoal-600 hover:to-primary-600',
    active: 'active:from-primary-700 active:via-charcoal-700 active:to-primary-700'
  },
  accent: {
    base: 'bg-gradient-to-r from-accent-500 to-primary-500',
    hover: 'hover:from-accent-600 hover:to-primary-600',
    active: 'active:from-accent-700 active:to-primary-700'
  },
  secondary: {
    base: 'bg-gradient-to-r from-secondary-500 to-primary-500',
    hover: 'hover:from-secondary-600 hover:to-primary-600',
    active: 'active:from-secondary-700 active:to-primary-700'
  }
} as const;