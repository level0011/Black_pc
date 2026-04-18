import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { useCartStore } from "../store/useCartStore";
import { CartItem } from "../components/CartItem";
import { fmt } from "../utils/formatCurrency";

// ─── Основной компонент страницы ─────────────────────────────────────────────
export default function CartPage({ isDark = true, setCurrentPage }) {
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [removing, setRemoving] = useState(null);

  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const handleRemove = (id) => {
    setRemoving(id);
    setTimeout(() => {
      removeFromCart(id);
      setRemoving(null);
    }, 350);
  };

  const subtotal = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const discount = promoApplied ? Math.round(subtotal * 0.1) : 0;
  const total = subtotal - discount;

  const applyPromo = () => {
    if (promoCode.trim().toUpperCase() === "BLACK10") setPromoApplied(true);
  };

  const t = {
    pageBg: isDark ? "bg-[#151515]" : "bg-gray-50",
    cardBg: isDark ? "bg-white/5" : "bg-black/5",
    inputBg: isDark ? "bg-transparent" : "bg-white",
    textPrimary: isDark ? "text-white" : "text-gray-900",
    textMuted: isDark ? "text-white/50" : "text-gray-500",
    textFaint: isDark ? "text-white/30" : "text-gray-400",
    textPrice: isDark ? "text-white/50" : "text-gray-500",
    border: isDark ? "border-white/10" : "border-black/10",
    inputBorder: isDark ? "border-white/20" : "border-black/20",
    qtyBtn: isDark
      ? "border border-white/20 text-white/60 hover:border-purple-500 hover:text-purple-400"
      : "border border-black/20 text-gray-500 hover:border-purple-500 hover:text-purple-500",
    removeBtn: isDark
      ? "text-white/20 hover:text-red-400"
      : "text-black/20 hover:text-red-500",
    continueLink: isDark
      ? "text-white/40 hover:text-purple-400"
      : "text-gray-400 hover:text-purple-500",
    inputText: isDark
      ? "text-white placeholder-white/20"
      : "text-gray-900 placeholder-gray-400",
    inputFocus: "focus:border-purple-500 focus:outline-none",
  };

  return (
    <div className={`min-h-screen font-sans ${t.pageBg} ${t.textPrimary}`}>
      <PageHeader
        title="КОРЗИНА"
        subtitle="Побрекушки и всякая-всячина"
        isDark={isDark}
      />

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-40 gap-6">
          <span className="text-8xl opacity-20">🛒</span>
          <p className={`${t.textMuted} text-lg tracking-widest uppercase`}>
            Корзина пуста
          </p>
          <button
            onClick={() => setCurrentPage("home")}
            className="mt-2 px-8 py-3 border border-purple-500 text-purple-400 text-xs tracking-widest uppercase font-bold hover:bg-purple-500 hover:text-white transition-all duration-300"
          >
            Перейти в каталог
          </button>
        </div>
      ) : (
        <div className="px-10 pb-20 flex gap-10 items-start">
          {/* Список товаров */}
          <div className="flex-1 flex flex-col gap-4">
            <div
              className={`grid grid-cols-12 text-xs tracking-widest ${t.textFaint} uppercase px-4 pb-2 border-b ${t.border}`}
            >
              <span className="col-span-6">Товар</span>
              <span className="col-span-2 text-center">Кол-во</span>
              <span className="col-span-2 text-center">Цена</span>
              <span className="col-span-2 text-right">Итого</span>
            </div>

            {cartItems.map((item) => (
              <div
                key={item.id}
                style={{
                  transition: "all 0.35s ease",
                  opacity: removing === item.id ? 0 : 1,
                  transform:
                    removing === item.id
                      ? "scale(0.95) translateX(2rem)"
                      : "scale(1)",
                }}
              >
                <CartItem item={item} onRemove={handleRemove} t={t} />
              </div>
            ))}

            <div className="mt-4">
              <button
                onClick={() => setCurrentPage("home")}
                className={`inline-flex items-center gap-2 text-xs tracking-widest uppercase ${t.continueLink} transition-colors`}
              >
                <span>←</span> Продолжить покупки
              </button>
            </div>
          </div>

          {/* Сводка заказа */}
          <div
            className={`w-80 flex-shrink-0 border ${t.border} ${t.cardBg} p-6 flex flex-col gap-5 sticky top-10`}
          >
            <h2
              className={`text-xs tracking-widest uppercase ${t.textMuted} border-b ${t.border} pb-4`}
            >
              Сводка заказа
            </h2>

            <div className="flex flex-col gap-3 text-sm">
              <div className={`flex justify-between ${t.textMuted}`}>
                <span>
                  Товары ({cartItems.reduce((s, i) => s + i.quantity, 0)} шт.)
                </span>
                <span>{fmt(subtotal)}</span>
              </div>
              {promoApplied && (
                <div className="flex justify-between text-purple-400">
                  <span>Скидка (10%)</span>
                  <span>− {fmt(discount)}</span>
                </div>
              )}
              <div className={`flex justify-between ${t.textMuted}`}>
                <span>Доставка</span>
                <span className="text-green-500 font-bold">Бесплатно</span>
              </div>
            </div>

            <div
              className={`border-t ${t.border} pt-4 flex justify-between items-baseline`}
            >
              <span
                className={`text-xs tracking-widest uppercase ${t.textMuted}`}
              >
                Итого
              </span>
              <span className={`text-2xl font-black ${t.textPrimary}`}>
                {fmt(total)}
              </span>
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Промокод"
                className={`flex-1 ${t.inputBg} border ${t.inputBorder} px-3 py-2 text-xs tracking-widest uppercase ${t.inputText} ${t.inputFocus} transition-colors`}
              />
              <button
                onClick={applyPromo}
                className={`px-3 py-2 text-xs font-bold tracking-widest uppercase transition-all ${
                  promoApplied
                    ? "bg-green-500/20 text-green-500 border border-green-500/30"
                    : "border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
                }`}
              >
                {promoApplied ? "✓" : "OK"}
              </button>
            </div>
            {promoApplied && (
              <p className="text-xs text-green-500 tracking-widest -mt-2">
                Промокод BLACK10 применён
              </p>
            )}
            {promoCode && !promoApplied && (
              <p className="text-xs text-red-400 tracking-widest -mt-2">
                Используйте BLACK10 для скидки 10%
              </p>
            )}

            <button className="w-full py-4 bg-purple-600 hover:bg-purple-500 text-white text-xs font-black tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]">
              Оформить заказ →
            </button>

            <div
              className={`flex justify-center gap-4 ${t.textFaint} text-xs tracking-wide`}
            >
              <span>🔒 Безопасная оплата</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
