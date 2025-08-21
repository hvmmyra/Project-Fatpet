/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./public/**/*.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/flowbite/**/*.js"
    ],
    theme: {
      extend: {},
    },
    plugins: [
        require('flowbite/plugin'),
        require(`@tailwindcss/line-clamp`),
      ],
      
  }