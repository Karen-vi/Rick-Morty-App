export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      colors: { 
        
        primary: 
          {   100: "#eee3ff", 
              600: "#8054c7", 
              800: "#afa8bb",
              700: "#5a3696",  
          }, 
          
          secondary: { 
              600: "#63d838", 
              200: "#7d8189",
              150: "#e2e2e2",
              100: "##fbfbfb",
              50: "#f3f4f6",
              40: "#e3e4f7"
            },  
      }, 
      fontFamily: { 
        inter: ['Inter', 'sans-serif'], 
        roboto: ['Roboto', 'sans-serif'], 
        poppins: ['Poppins', 'sans-serif'], 
      },
    }
  },
};
