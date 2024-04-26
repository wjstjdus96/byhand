import { useQuery } from "@tanstack/react-query";
import { getProductsByProductsId } from "../../api/product";

export const useProductsByProductIds = ({
  productIds,
}: {
  productIds: string[];
}) => {
  const { data: products } = useQuery({
    queryKey: ["cart", "123"],
    queryFn: () => getProductsByProductsId(productIds),
    refetchOnWindowFocus: false,
  });

  return { products };
};
