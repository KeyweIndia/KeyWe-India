/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '5rem',
        '2xl': '5rem',
         
        },  
      },
      colors: {
       // primary: "#00E5FF",
        primary: "#7a147a",
        secondary: "#2203a5",
        // heading: "#01173c",
        // body: "#efe7da",
      },
      fontFamily: {
        Open: ['Open Sans', 'sans-serif'],
        Jost:  ['Jost', 'sans-serif'],
       
      
      
        
      },
    },
  },
  plugins: [],
};
