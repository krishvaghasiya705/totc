/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        lg: "1440px",
        xl: "1024px",
        md: "768px",
        sm: "576px",
      },
      colors: {
        cutom: "#1E3A8A",
        green: "#49bbbd",
        whitelight: "#FFFFFF4D",
        cusgray: "#5B5B5B",
        cusorange: "#F48C06",
      },
      spacing: {
        30: '30px',
        60: '60px',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    plugins: [],
  }
}