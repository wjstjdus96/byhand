import { useQuery } from "@tanstack/react-query";
import { getOneProduct } from "../api/product";

export const useGetProductDetail = ({ productId }: { productId: string }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getOneProduct(productId),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  return { data, isLoading };
};
