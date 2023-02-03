/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
   
    extend:{
      screens:{
        'sm':'250px',
        'bsm': '360px'
      },
      colors:{
        'company-blue': '#003580'
      },
      
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}