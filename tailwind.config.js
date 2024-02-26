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
  },
  plugins: [],
};
