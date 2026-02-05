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
              700: "#5a3696",  
          }, 
          
          secondary: { 
              600: "#63d838", 
              200: "#7d8189",
              100: "#f5f5f5"
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
