// components/ProductCard.jsx

export default function ProductCard({ product, isDark }) {
  return (
    <div
      className={`rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer
        ${
          isDark
            ? "bg-[#151515] border-white/5 hover:border-[#8860ff]/50"
            : "bg-gray-50 border-black/5 shadow-xl hover:border-[#8860ff]/50"
        }`}
    >
      {/* превью изображения */}
      <div
        className={`w-full h-48 flex items-center justify-center text-sm tracking-widest uppercase font-semibold
          ${isDark ? "bg-[#1f1f1f] text-white/20" : "bg-black/5 text-black/20"}`}
      >
        {product.category}
      </div>

      {/* информация */}
      <div className="p-5">
        <p
          className={`text-base font-black uppercase tracking-wide mb-2
          ${isDark ? "text-white" : "text-black"}`}
        >
          {product.name}
        </p>

        <p className="text-[#8860ff] text-lg font-bold mb-4">
          {product.price.toLocaleString("ru-RU")} ₽
        </p>

        <button className="w-full py-3 rounded-xl bg-[#8860ff] hover:bg-[#7a50f0] active:scale-95 transition-all duration-200 text-white text-xs font-bold tracking-widest uppercase">
          В корзину
        </button>
      </div>
    </div>
  );
}
