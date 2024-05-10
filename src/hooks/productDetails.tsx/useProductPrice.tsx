import { useEffect, useState } from "react";

interface IUseProductPrice {
  selectedQuantity: number;
  price: number;
}

export const useProductPrice = ({
  selectedQuantity,
  price,
}: IUseProductPrice) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const tot = selectedQuantity * price;
    setTotalPrice(tot);
  }, [selectedQuantity]);

  return { totalPrice };
};
