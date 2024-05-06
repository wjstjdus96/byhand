import { useQuery } from "@tanstack/react-query";
import { getProductsByProductsId } from "../../api/product";
import { useEffect } from "react";
import { useCartProductStore } from "../../store/cartStore";
import { getSessionItem } from "../../utils/handleSession";

export const useProductsByProductIds = () => {
  const { cartItems } = useCartProductStore();
  let productIds = Object.keys(cartItems);
  const userId = getSessionItem("userId");
  const { data: products, refetch } = useQuery({
    queryKey: ["cart", userId],
    queryFn: () => getProductsByProductsId(productIds),
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    productIds = Object.keys(cartItems);
    refetch();
  }, [cartItems]);

  return { products };
};
