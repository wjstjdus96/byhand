import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getProductsByProductsId } from "../../api/product";
import { useUserStore } from "../../store/userStore";
import { ICartProductData } from "../../types/cart";

interface IUseProductByCartIds {
  cartItems: ICartProductData;
}

export const useProductsByCartIds = ({ cartItems }: IUseProductByCartIds) => {
  const { user } = useUserStore();
  const {
    data: products,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["cart", user?.uid],
    queryFn: () => getProductsByProductsId(Object.keys(cartItems)),
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    refetch();
  }, [cartItems]);

  return { products, isLoading, refetch };
};
