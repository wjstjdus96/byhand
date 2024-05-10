import { useEffect, useState } from "react";
import { useCartProductStore } from "../store/cartStore";

interface IUseQuantitySelection {
  maxQuantity: number;
  initialCnt: number;
  cartItemId?: string;
}

export const useQuantitySelection = ({
  maxQuantity,
  initialCnt,
  cartItemId,
}: IUseQuantitySelection) => {
  const { addCartItem } = useCartProductStore();
  const [selectedQuantity, setSelectedQuantity] = useState<number>(initialCnt);

  const onClickMinus = () => {
    setSelectedQuantity((prev) => prev - 1);
  };

  const onClickPlus = () => {
    setSelectedQuantity((prev) => prev + 1);
  };

  const isMinusDisabled = cartItemId
    ? selectedQuantity == 1
    : selectedQuantity == 0;
  const isPlusDisabled = selectedQuantity == maxQuantity;

  useEffect(() => {
    if (cartItemId && initialCnt) {
      addCartItem(cartItemId, selectedQuantity);
    }
  }, [selectedQuantity]);

  return {
    selectedQuantity,
    onClickMinus,
    onClickPlus,
    isMinusDisabled,
    isPlusDisabled,
  };
};
