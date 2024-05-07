import { create } from "zustand";
import { ICartProductData } from "../types/cart";
import { createJSONStorage, persist } from "zustand/middleware";

interface ICartState {
  isCartOpen: boolean;
  toggleCart: () => void;
  closeCart: () => void;
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
  closeCart: () => set(() => ({ isCartOpen: false })),
}));

export const useCartProductStore = create(
  persist<ICartProductState>(
    (set) => ({
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
          return { ...state, cartItems: newCartItems };
        });
      },
    }),
    {
      name: "cartItem-storage",
    }
  )
);
