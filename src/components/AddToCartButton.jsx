import { useState } from "react";
import { useCartStore } from "../store/useCartStore";

export default function AddToCartButton({ product, isDark = true }) {
  const { cartItems, addToCart, increment, decrement, setQuantity } =
    useCartStore();
  const [showInput, setShowInput] = useState(false);

  const cartItem = cartItems.find((i) => String(i.id) === String(product.id));

  // 2. Если товар найден, берем его свойство quantity, если нет — 0
  const qty = cartItem ? cartItem.quantity : 0;

  // 3. Проверка осталась прежней
  const isInCart = qty > 0;
  // Если товара нет в корзине — большая кнопка
  if (!isInCart) {
    return (
      <button
        onClick={() => addToCart(product)}
        className="w-full py-3 rounded-xl bg-[#8860ff] hover:bg-[#7a50f0] active:scale-95 transition-all duration-200 text-white text-xs font-bold tracking-widest uppercase"
      >
        В корзину
      </button>
    );
  }

  // Товар в корзине — показываем контрол
  return (
    <div className="w-full flex items-center gap-2">
      {/* − кнопка */}
      <button
        onClick={() => decrement(product.id)}
        className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#8860ff] hover:bg-[#7a50f0] active:scale-95 transition-all duration-200 text-white text-lg font-bold flex items-center justify-center"
      >
        −
      </button>

      {/* Количество / input */}
      {showInput ? (
        <input
          type="number"
          min="0"
          defaultValue={qty}
          autoFocus
          onBlur={(e) => {
            const val = parseInt(e.target.value);
            setQuantity(product.id, isNaN(val) ? 0 : val);
            setShowInput(false);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setQuantity(product.id, e.target.value);
              setShowInput(false);
            }
            if (e.key === "Escape") setShowInput(false);
          }}
          className="flex-1 text-center bg-white/10 border border-[#8860ff] rounded-xl py-2 text-sm font-bold outline-none focus:border-[#b490ff]"
        />
      ) : (
        <button
          onClick={() => setShowInput(true)}
          title="Нажмите чтобы ввести точное количество"
          className={`flex-1 text-center py-2 rounded-xl bg-white/10 hover:bg-white/20 transition text-sm font-bold border border-transparent hover:border-[#8860ff] ${isDark ? "text-white" : "text-black"}`}
        >
          {qty}
        </button>
      )}

      {/* + кнопка */}
      <button
        onClick={() => increment(product.id)}
        className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#8860ff] hover:bg-[#7a50f0] active:scale-95 transition-all duration-200 text-white text-lg font-bold flex items-center justify-center"
      >
        +
      </button>
    </div>
  );
}
