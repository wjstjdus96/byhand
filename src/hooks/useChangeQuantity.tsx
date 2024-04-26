import { useState } from "react";

interface IUserChangeQuantity {
  maxQuantity: number;
  initialCnt?: number;
}

export const useChangeQuantity = ({
  maxQuantity,
  initialCnt,
}: IUserChangeQuantity) => {
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

  return {
    selectedQuantity,
    onClickMinus,
    onClickPlus,
    isMinusDisabled,
    isPlusDisabled,
  };
};
