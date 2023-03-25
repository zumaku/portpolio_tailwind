/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html, js}"],
  theme: {
    extend: {
      colors:{
        latar: '#e6e6e6',
        kuning: '#FFC637',
        abu: '#828282',
      },
      fontFamily:{
        nunito: "Nunito",
        playfair: "Playfair",
      },
      backgroundImage:{
        footer: "url('/public/img/footer.svg')",
      }
    },
  },
  plugins: [],
}
