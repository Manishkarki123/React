/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
     colors:{
      bg:'#35217E',
      white:'#FFFFFF',
      primary: '#1976d2',
      secondary: '#f44336',
      gray:{
        100: '#f2f2f2',
        200: '#e0e0e0',
      }
     }
    },
  screens:{
    'mobile':{'max':'321px'},

    'tablet':{'max':'991px'},

     'laptop':{'max':'1215px'},

    'ssm':'425px',
    //=>@media (min-width :425px) { ... } 

    'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
  }
  },
  plugins: [],
}

