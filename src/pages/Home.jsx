export default function Home({ isDark }) {
  // 1. Наша мини-база данных
  const products = [
    { id: 1, name: "Asus Rog Strix", price: "125 000", category: "GPU" },
    { id: 2, name: "Core i9-14900K", price: "62 000", category: "CPU" },
    { id: 3, name: "Black Case v2", price: "18 500", category: "CASE" }
  ];

  return (
    <div className='flex flex-col items-center pt-24 pb-20'>
      {/* Hero секция */}
      <h1 className='text-8xl font-black uppercase tracking-[1px]'>
        Black <span className='text-[#8860ff]'>Home</span>
      </h1>
      <p className='mt-4 text-gray-500 uppercase tracking-widest text-[10px] mb-20'>
        Добро пожаловать в мир кастомных решений
      </p>

      {/* Сетка товаров */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-10 max-w-6xl w-full'>
        {products.map(item => (
          <div
            key={item.id}
            className={`p-6 rounded-3xl border transition-all duration-300 group ${
              isDark
                ? "bg-[#151515] border-white/5 hover:border-[#8860ff]/50"
                : "bg-gray-50 border-black/5 shadow-xl hover:border-[#8860ff]/50"
            }`}
          >
            <div className='w-full h-40 bg-zinc-800 rounded-2xl mb-6 flex items-center justify-center font-black text-zinc-700 uppercase'>
              {item.category}
            </div>
            <h3 className='text-xl font-black uppercase italic'>{item.name}</h3>
            <p className='text-[#8860ff] font-bold text-2xl mt-2'>{item.price} ₽</p>
            <button className='w-full mt-6 py-4 bg-[#8860ff] text-white font-black uppercase text-[10px] tracking-widest rounded-xl hover:scale-[1.02] active:scale-95 transition-all'>
              В корзину
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
