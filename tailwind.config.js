/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        llg: "900px"
      },
      
    },
    container: {
      center: true,
      padding: "0px 10px",
      screens: {
        sm: "500px",
        md: "760px",
        lg: "850px",
        llg: "900px",
        xl: "1024px",
        xxl: "1300px"
      }
    }
  },
  plugins: [],
}

