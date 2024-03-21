/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "logo-alta": "url('/img/logo.png')",
        "join-us": "url('/img/joinUs.png')",
      },
      colors: {
        "orange-alta": "#F26D21",
        "red-alta": "#EC3740",
        "red-warning": "#ff4d4f",
      },
      fontFamily: {
        body: ['"Open Sans"'],
        roboto: ['"Roboto"'],
      },
    },
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      xxl: "1600px",
      // => @media (min-width: 1600px) { ... }
    },
  },
  plugins: [],
};
