/** @type {import('tailwindcss').Config} */
module.exports = {
  // Список файлов, в которых Tailwind будет искать классы для сборки
  content: [
    './*.html', 
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}