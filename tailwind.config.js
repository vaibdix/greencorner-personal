/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f8faf8',
          100: '#f0f4f1',
          200: '#dce3dd',
          600: '#637b66',
        },
      },
    },
  },
  plugins: [],
};
