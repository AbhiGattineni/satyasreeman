/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    backgroundImage: {
      'image1': "url('./src/images/image1.jpg')",
      'image2': "url('./src/images/image2.jpg')",
      'image3': "url('./src/images/image3.jpg')",
    }
  },
  plugins: [],
}
