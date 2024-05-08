import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ICartProductData } from "../types/cart";

interface ICartProductState {
  cartItems: ICartProductData;
  addCartItem: (cartItemId: string, cartItemCount: number) => void;
  findCartItem: any;
  deleteCartItem: (cartItemId: string) => void;
}

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
