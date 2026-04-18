import { useState, useEffect } from "react";
import { useCartStore } from "../store/useCartStore";
import { fmt } from "../utils/formatCurrency";

// ─── Отдельный компонент для строки товара ───────────────────────────────────
export function CartItem({ item, onRemove, t }) {
  const [inputValue, setInputValue] = useState(String(item.quantity));
  const increment = useCartStore((state) => state.increment);
  const decrement = useCartStore((state) => state.decrement);
  const setQuantity = useCartStore((state) => state.setQuantity);


  // Синхронизируем input если quantity изменился через + / −
  useEffect(() => {
    setInputValue(String(item.quantity));
  }, [item.quantity]);

  const commitValue = (val) => {
    const num = parseInt(val);

    if (num === 0 || val === "" || isNaN(num)) {
      onRemove(item.id);
      return;
    }

    if (!isNaN(num) && num > 0) {
      setQuantity(item.id, num);
    } else {
      // Пустое поле или 0 — откатываем к текущему значению
      setInputValue(String(item.quantity));
    }
  };

  return (
    <div
      className={`grid grid-cols-12 items-center gap-4 ${t.cardBg} border ${t.border} p-4`}
      style={{
        transition: "all 0.35s ease",
        opacity: 1,
        transform: "scale(1)",
      }}
    >
      {/* Информация о товаре */}
      <div className="col-span-6 flex items-center gap-4">
        <div className={`w-20 h-16 overflow-hidden flex-shrink-0 ${t.cardBg}`}>
          <img
            src={item.picture}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-xs text-purple-400 tracking-widest uppercase mb-1">
            {item.category}
          </p>
          <p className={`font-bold ${t.textPrimary} text-sm leading-tight`}>
            {item.name}
          </p>
        </div>
      </div>

      {/* Количество */}
      <div className="col-span-2 flex items-center justify-center gap-1">
        <button
          onClick={() => decrement(item.id)}
          className={`w-7 h-7 ${t.qtyBtn} text-lg leading-none flex items-center justify-center transition-colors`}
        >
          −
        </button>

        <input
          type="number"
          min="1"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={(e) => commitValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") commitValue(e.target.value);
            if (e.key === "Escape") setInputValue(String(item.quantity));
          }}
          className={`w-10 text-center bg-transparent border-b ${t.inputBorder} font-bold text-sm ${t.textPrimary} outline-none focus:border-purple-500 transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
        />

        <button
          onClick={() => increment(item.id)}
          className={`w-7 h-7 ${t.qtyBtn} text-lg leading-none flex items-center justify-center transition-colors`}
        >
          +
        </button>
      </div>

      {/* Цена за единицу */}
      <div className={`col-span-2 text-center ${t.textPrice} text-sm`}>
        {fmt(item.price)}
      </div>

      {/* Итого по позиции */}
      <div className="col-span-2 flex items-center justify-end gap-3">
        <span className={`font-black ${t.textPrimary} text-sm`}>
          {fmt(item.price * item.quantity)}
        </span>
        <button
          onClick={() => onRemove(item.id)}
          className={`w-6 h-6 ${t.removeBtn} transition-colors text-lg leading-none flex-shrink-0`}
          title="Удалить"
        >
          ×
        </button>
      </div>
    </div>
  );
}
