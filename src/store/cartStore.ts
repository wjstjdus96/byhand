import { create } from "zustand";
import { ICartProductData } from "../types/cart";

interface ICartState {
  isCartOpen: boolean;
  toggleCart: () => void;
}

interface ICartProductState {
  cartItems: ICartProductData;
  addCartItem: (cartItemId: string, cartItemCount: number) => void;
  findCartItem: any;
  deleteCartItem: (cartItemId: string) => void;
}

export const useCartStore = create<ICartState>((set) => ({
  isCartOpen: false,
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
}));

export const useCartProductStore = create<ICartProductState>((set) => ({
  cartItems: {},
  addCartItem: (cartItemId: string, cartItemCount: number) =>
    set((state) => ({
      cartItems: {
        ...state.cartItems,
        [cartItemId]: cartItemCount,
      },
    })),
  findCartItem: (cartItemId: string) => {
    return useCartProductStore.getState().cartItems[cartItemId];
  },
  deleteCartItem: (cartItemId: string) => {
    set((state) => {
      const newCartItems = { ...state.cartItems };
      delete newCartItems[cartItemId];
      console;
      return { ...state, cartItems: newCartItems };
    });
  },
}));
