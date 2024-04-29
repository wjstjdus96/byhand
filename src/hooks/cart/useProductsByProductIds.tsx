import { useQuery } from "@tanstack/react-query";
import { getProductsByProductsId } from "../../api/product";
import { useEffect } from "react";
import { useCartProductStore } from "../../store/cartStore";

export const useProductsByProductIds = () => {
  const { cartItems } = useCartProductStore();
  let productIds = Object.keys(cartItems);
  const { data: products, refetch } = useQuery({
    queryKey: ["cart", "123"],
    queryFn: () => getProductsByProductsId(productIds),
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    refetch();
  }, [cartItems]);

  return { products };
};
