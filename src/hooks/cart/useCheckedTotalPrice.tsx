import { useEffect, useState } from "react";
import { useCartProductStore } from "../../store/cartStore";
import { IProductResData } from "../../types/product";
import { ICheckedItem } from "../useCheckboxSelection";

interface IUseCheckedTotalPrice {
  products: IProductResData[] | undefined;
  checkedItems: ICheckedItem[];
}

export const useCheckedTotalPrice = ({
  products,
  checkedItems,
}: IUseCheckedTotalPrice) => {
  const { cartItems } = useCartProductStore();
  const [checkedItemsTotalPrice, setCheckedItemsTotalPrice] =
    useState<number>(0);

  const getItemCurrentPrice = (itemId: string) => {
    const product = products?.find((product) => product.id === itemId);
    if (product) {
      return product.productPrice;
    }
    return 0;
  };

  useEffect(() => {
    let totPrice = 0;
    checkedItems.forEach(({ itemId }) => {
      const currentPrice = getItemCurrentPrice(itemId);
      const itemCount = cartItems[itemId];
      totPrice += itemCount * currentPrice;
    });

    setCheckedItemsTotalPrice(totPrice);
  }, [checkedItems, cartItems]);

  return { checkedItemsTotalPrice };
};
