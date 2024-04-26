import { create } from "zustand";
import { ICartProductData } from "../types/cart";

interface ICartState {
  isCartOpen: boolean;
  toggleCart: () => void;
}

interface ICartProductState {
  cartItems: ICartProductData;
  addCartItem: (cartItemId: string, cartItemCount: number) => void;
  findCartItem: (cartItemId: string) => number | undefined;
}

export const useCartStore = create<ICartState>((set) => ({
  isCartOpen: false,
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
}));

export const useCartProductStore: any = create<ICartProductState>((set) => ({
  cartItems: {},
  addCartItem: (cartItemId: string, cartItemCount: number) =>
    set((state) => ({
      cartItems: {
        ...state.cartItems,
        [cartItemId]: cartItemCount,
      },
    })),
  findCartItem: (cartItemId: string) => {
    return useCartProductStore.getState().cart[cartItemId];
  },
}));
