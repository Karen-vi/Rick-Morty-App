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
              600: "#1F2937", 
            }, 
            textMuted: "#af2364", 
            borderLight: "#E5E7EB", 
            grayMedium: "#700f0f", 
      }, 
    }
  },
};
