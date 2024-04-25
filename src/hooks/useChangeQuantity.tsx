import { useState } from "react";

export const useChangeQuantity = ({ maxQuantity }: { maxQuantity: number }) => {
  const [selectedQuantity, setSelectedQuantity] = useState<number>(0);

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
