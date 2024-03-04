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
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
