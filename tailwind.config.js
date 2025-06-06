/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "tr-orange" : '#FE8C00',
        "tr-gray": '#7D7D7D',
        "tr-grayWhite":'#000000BF',
        newgray : '#7D7D7D',
        anotherGray:'#878787',
        'tr-pink':'#FFF7EC',
        'tr-white': '#333333'
      }
    },
    screens:{
      laptop:'850px',
      mobile:'320px',
      mediumScreen:'1300px',
      largerScreen:'1240px',
      mobileMax:'440px',
      miniLaptop:'1420px',
      aboutResponsive:'580px'
    
    }
  },
  plugins: [],
}

