import { useQueryClient } from "@tanstack/react-query";
import { getOneProduct } from "../../api/product";

interface IUsePrefetchProduct {
  productId: string;
}

export const usePrefetchProduct = ({ productId }: IUsePrefetchProduct) => {
  const queryClient = useQueryClient();
  const handlePrefetchProduct = () => {
    return queryClient.prefetchQuery({
      queryKey: ["product", productId],
      queryFn: () => getOneProduct(productId),
    });
  };

  let prefetchTimer: ReturnType<typeof setTimeout> | null = null;

  const handleMouseEnter = () => {
    prefetchTimer = setTimeout(handlePrefetchProduct, 400);
  };

  const handleMouseLeave = () => {
    if (prefetchTimer) {
      clearTimeout(prefetchTimer);
      prefetchTimer = null;
    }
  };

  return { handleMouseEnter, handleMouseLeave };
};
