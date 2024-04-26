import { create } from "zustand";

interface CartState {
  isCartOpen: boolean;
  toggleCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  isCartOpen: false,
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
}));
