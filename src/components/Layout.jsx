export default function Layout({ children, isDark, setIsDark, setCurrentPage }) {
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
        <div className='text-3xl tracking-[1.5px] font-black'>
          Black <span className='text-[#8860ff]'>PC</span>
        </div>
        <nav className='ml-15 mr-auto'>
          <ul className='flex gap-8 font-bold uppercase text-[11px] tracking-[0.2em] text-gray-500'>
            <li
              onClick={() => setCurrentPage("home")}
              className='hover:text-[#8860ff] cursor-pointer transition-colors'
            >
              Главная
            </li>
            <li
              onClick={() => setCurrentPage("laptops")}
              className='hover:text-[#8860ff] cursor-pointer transition-colors'
            >
              Ноутбуки
            </li>
            <li
              onClick={() => setCurrentPage("parts")}
              className='hover:text-[#8860ff] cursor-pointer transition-colors'
            >
              Комплектующие
            </li>
            <li
              onClick={() => setCurrentPage("periphery")}
              className='hover:text-[#8860ff] cursor-pointer transition-colors'
            >
              Периферия
            </li>
          </ul>
        </nav>
        <button
          onClick={() => setIsDark(!isDark)}
          className='w-12 h-10 flex items-center justify-center border border-[#8b8b8b] rounded-[1em] hover:bg-[#8860ff] transition-all'
        >
          {isDark ? "☀️" : "🌙"}
        </button>
      </header>

      <main className='min-h-[80vh]'>{children}</main>

      <footer className={`py-10 border-t ${isDark ? "border-white/10" : "border-black/10"}`}>
        <div className='flex flex-col items-center gap-4'>
          <div className='text-xl opacity-50 tracking-[1.5px] font-black'>
            Black <span className='text-[#8860ff]'>PC</span>
          </div>
          <p className='text-[10px] text-gray-500 uppercase tracking-[0.3em]'>
            © 2026 Все права защищены
          </p>
          <div className='flex gap-6 text-[10px] font-bold text-gray-400 uppercase'>
            <span className='hover:text-[#8860ff] cursor-pointer'>Telegram</span>
            <span className='hover:text-[#8860ff] cursor-pointer'>VK</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
