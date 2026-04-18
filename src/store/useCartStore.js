import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      cartItems: [], // { ...product, quantity: number }

      // Добавить товар (первый раз qty=1, иначе +1)
      addToCart: (product) => set((state) => {
        const existing = state.cartItems.find((i) => String(i.id) === String(product.id));
        if (existing) {
          return {
            cartItems: state.cartItems.map((i) =>
              String(i.id) === String(product.id)
                ? { ...i, quantity: i.quantity + 1 }
                : i
            ),
          };
        }
        return { cartItems: [...state.cartItems, { ...product, quantity: 1 }] };
      }),

      // +1
      increment: (id) => set((state) => ({
        cartItems: state.cartItems.map((i) =>
          String(i.id) === String(id) ? { ...i, quantity: i.quantity + 1 } : i
        ),
      })),

      // -1 (если qty=1 — удаляем товар)
      decrement: (id) => set((state) => {
        const item = state.cartItems.find((i) => String(i.id) === String(id));
        if (!item) return state;
        if (item.quantity === 1) {
          return { cartItems: state.cartItems.filter((i) => String(i.id) !== String(id)) };
        }
        return {
          cartItems: state.cartItems.map((i) =>
            String(i.id) === String(id) ? { ...i, quantity: i.quantity - 1 } : i
          ),
        };
      }),

      // Установить точное количество (для input)
      setQuantity: (id, qty) => set((state) => {
        const num = Math.max(0, parseInt(qty) || 0);
        if (num === 0) {
          return { cartItems: state.cartItems.filter((i) => String(i.id) !== String(id)) };
        }
        return {
          cartItems: state.cartItems.map((i) =>
            String(i.id) === String(id) ? { ...i, quantity: num } : i
          ),
        };
      }),

      // Полностью удалить товар
      removeFromCart: (id) => set((state) => ({
        cartItems: state.cartItems.filter((i) => String(i.id) !== String(id)),
      })),

      clearCart: () => set({ cartItems: [] }),

      getTotalPrice: () =>
        get().cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    }),
    { name: "cart-storage" }
  )
);