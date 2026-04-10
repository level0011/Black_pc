/** @type {import('tailwindcss').Config} */
export default {
  // 1. Указываем пути ко всем файлам, где мы будем писать классы Tailwind
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 2. Сюда мы позже добавим твои фирменные цвета Black PC
    },
  },
  plugins: [],
}
