import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          950: '#240046',
          900: '#3c096c',
          700: '#5a189a',
          500: '#7b2cbf',
          300: '#9d4edd'
        }
      }
    }
  },
  plugins: []
};

export default config;
