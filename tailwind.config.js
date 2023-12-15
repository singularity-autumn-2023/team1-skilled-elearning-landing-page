/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-bg": "#FFF",
        "color-text-primary": "#83869A",
        "color-text-secondary": "#13183F",
        "color-text-white": "#FFF",
        "color-text-gray": "#83869A",
        "color-text-pink": "#F74780",
        "color-text-hover-pink": "#FFA7C3",
        "color-black": "#13183F",
        "color-pink": "linear-gradient(180deg, #FF6F48 0%, #F02AA6 100%)",
        "color-purple": "linear-gradient(180deg, #4851FF 0%, #F02AA6 100%)",
        "color-hover-blue": "#666CA3",
        "color-hover-pink": "linear-gradient(0deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%), linear-gradient(180deg, #FF6F48 0%, #F02AA6 100%)",
        "color-hover-purple": "linear-gradient(0deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%), linear-gradient(180deg, #4851FF -54.32%, #F02AA6 100%)",
      },
    },
  },
  plugins: [],
}
