/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#18212f",
        mint: "#2bb673",
        skyglass: "#eaf6ff",
        saffron: "#f59e0b"
      },
      boxShadow: {
        panel: "0 18px 60px rgba(24, 33, 47, 0.10)"
      }
    }
  },
  plugins: []
};
