import { useQuery } from "@tanstack/react-query";
import { getProductsByProductsId } from "../../api/product";
import { useEffect } from "react";
import { useCartProductStore } from "../../store/cartStore";
import { getSessionItem } from "../../utils/handleSession";
import { ICartProductData } from "../../types/cart";

interface IUseProductByCartIds {
  cartItems: ICartProductData;
}

export const useProductsByCartIds = ({ cartItems }: IUseProductByCartIds) => {
  // const { cartItems } = useCartProductStore();
  const userId = getSessionItem("userId");
  const {
    data: products,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["cart", userId],
    queryFn: () => getProductsByProductsId(Object.keys(cartItems)),
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    refetch();
  }, [cartItems]);

  return { products, isLoading, refetch };
};
