/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".//**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'Rubik': ['Rubik' ,'sans-serif'],
        'Inter': ['Inter' , 'sans-serif']
      },
      boxShadow:{
        'card-shadow': [ '0px 40px 20px 0px #ECE9F9'],        
      }

    },
  },
  plugins: [],
}


