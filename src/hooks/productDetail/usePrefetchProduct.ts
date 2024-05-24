import { useQueryClient } from "@tanstack/react-query";
import { getOneProduct } from "../../api/product";
import { useState } from "react";

interface IUsePrefetchProduct {
  productId: string;
}

export const usePrefetchProduct = ({ productId }: IUsePrefetchProduct) => {
  const queryClient = useQueryClient();
  const [isPrefetched, setIsPrefetched] = useState(false);
  const handlePrefetchProduct = () => {
    setIsPrefetched(true);
    return queryClient.prefetchQuery({
      queryKey: ["product", productId],
      queryFn: () => getOneProduct(productId),
    });
  };

  let prefetchTimer: ReturnType<typeof setTimeout> | null = null;

  const handleMouseEnter = () => {
    if (!isPrefetched) {
      prefetchTimer = setTimeout(handlePrefetchProduct, 400);
    }
  };

  const handleMouseLeave = () => {
    if (prefetchTimer) {
      clearTimeout(prefetchTimer);
      prefetchTimer = null;
    }
  };

  return { handleMouseEnter, handleMouseLeave };
};
