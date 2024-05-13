import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getProductsByProductsId } from "../../api/product";
import { useCartProductStore } from "../../store/cartStore";
import { useUserStore } from "../../store/userStore";

export const useProductsByCartIds = () => {
  const { cartItems } = useCartProductStore();
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
  }, [Object.keys(cartItems).length]);

  return { products, isLoading, refetch };
};
