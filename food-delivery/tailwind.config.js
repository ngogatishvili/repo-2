/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width:{
        150:"150px",
       
      },
      height:{
        80:"80px",
      
      },
      screens:{
        sm:"640px",
        md:"768px",
        lg:"1024px",
        xl:"1280px",
        "2xl":"1536px"
      },
      colors:{
        headingColor:"#2e2e2e",
        textColor:"#515151",
        cartNumBg:"#e80013",
        primary:"#f5f3f3"
      },
      minWidth:{
        210:"210px",
        350:"350px",
        620:"620px"
      }
    },
  },
  plugins: [],
}


