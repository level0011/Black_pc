import { useCartStore } from "../store/useCartStore";

export default function Layout({
  children,
  isDark,
  setIsDark,
  setCurrentPage,
}) {
  const totalCount = useCartStore((state) =>
    state.cartItems.reduce((sum, item) => sum + item.quantity, 0),
  );

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <header
        className={`flex justify-between items-center px-10 py-6 sticky top-0 z-50 shadow-2xl ${
          isDark ? "bg-black/90" : "bg-white/90"
        } backdrop-blur-md`}
      >
        <div
          onClick={() => setCurrentPage("home")}
          className="text-3xl tracking-[1.5px] font-black cursor-pointer select-none"
        >
          Black <span className="text-[#8860ff]">PC</span>
        </div>
        <nav className="ml-16 mr-auto">
          <ul className="flex gap-8 font-bold uppercase text-[11px] tracking-[0.2em] text-gray-500">
            <li
              onClick={() => setCurrentPage("home")}
              className="hover:text-[#8860ff] cursor-pointer transition-colors"
            >
              Главная
            </li>
            <li
              onClick={() => setCurrentPage("laptops")}
              className="hover:text-[#8860ff] cursor-pointer transition-colors"
            >
              Ноутбуки
            </li>
            <li
              onClick={() => setCurrentPage("parts")}
              className="hover:text-[#8860ff] cursor-pointer transition-colors"
            >
              Комплектующие
            </li>
            <li
              onClick={() => setCurrentPage("periphery")}
              className="hover:text-[#8860ff] cursor-pointer transition-colors"
            >
              Периферия
            </li>
          </ul>
        </nav>

        <button
          onClick={() => setCurrentPage("cart")}
          className="relative mr-3 w-11 h-10 flex items-center justify-center border border-gray-600 hover:border-[#8860ff] transition-all duration-300 group rounded-[0.4em]"
        >
          <svg
            className="w-5 h-5 text-gray-400 group-hover:text-[#8860ff] transition-colors"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>

          {totalCount > 0 && (
            <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] px-1 bg-[#8860ff] text-white text-[10px] font-black flex items-center justify-center rounded-full shadow-[0_0_8px_rgba(136,96,255,0.7)]">
              {totalCount > 99 ? "99+" : totalCount}
            </span>
          )}
        </button>

        <button
          onClick={() => setIsDark(!isDark)}
          className="w-12 h-10 flex items-center justify-center border border-[#8b8b8b] rounded-[1em] hover:bg-[#8860ff] transition-all"
        >
          {isDark ? "☀️" : "🌙"}
        </button>
      </header>

      <main className="min-h-[80vh]">{children}</main>

      <footer
        className={`py-10 border-t ${isDark ? "border-white/10" : "border-black/10"}`}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="text-xl opacity-50 tracking-[1.5px] font-black">
            Black <span className="text-[#8860ff]">PC</span>
          </div>
          <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em]">
            © 2026 Все права защищены
          </p>
          <div className="flex gap-6 text-[10px] font-bold text-gray-400 uppercase">
            <span className="hover:text-[#8860ff] cursor-pointer">
              Telegram
            </span>
            <span className="hover:text-[#8860ff] cursor-pointer">VK</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
