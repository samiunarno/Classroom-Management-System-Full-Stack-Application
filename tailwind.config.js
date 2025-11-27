/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};

/* In your tailwind.config.js */
module.exports = {
  darkMode: 'class', // Enable dark mode based on a class
  theme: {
    extend: {
      colors: {
        // Custom colors for dark mode (if needed)
      },
    },
  },
  plugins: [],
};


