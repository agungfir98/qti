/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        customsatu: "0px 7.8764px 9px rgba(164,164,164,0.29)",
      },
    },
  },
  plugins: [],
};
