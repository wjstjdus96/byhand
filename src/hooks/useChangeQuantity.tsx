import { useEffect, useState } from "react";
import { useCartProductStore } from "../store/cartStore";

interface IUserChangeQuantity {
  maxQuantity: number;
  initialCnt?: number;
  isCartItem?: boolean;
  cartItemId?: string;
}

export const useChangeQuantity = ({
  maxQuantity,
  initialCnt,
  cartItemId,
}: IUserChangeQuantity) => {
  const { addCartItem } = useCartProductStore();
  const [selectedQuantity, setSelectedQuantity] = useState<number>(
    initialCnt ? initialCnt : 0
  );

  const onClickMinus = () => {
    setSelectedQuantity((prev) => prev - 1);
  };

  const onClickPlus = () => {
    setSelectedQuantity((prev) => prev + 1);
  };

  const isMinusDisabled = selectedQuantity == 0;
  const isPlusDisabled = selectedQuantity == maxQuantity;

  useEffect(() => {
    if (cartItemId) {
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
