import { useQuery } from "@tanstack/react-query";
import { getOneProduct } from "../../api/product";

export const useProductDetail = ({ productId }: { productId: string }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getOneProduct(productId),
    refetchOnWindowFocus: false,
  });

  return { data, isLoading };
};
