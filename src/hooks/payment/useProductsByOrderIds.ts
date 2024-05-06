import { useQuery } from "@tanstack/react-query";
import { getProductsByProductsId } from "../../api/product";
import { getSessionItem } from "../../utils/handleSession";

export const useProductsByOrderIds = ({
  orderItemsId,
}: {
  orderItemsId: string[];
}) => {
  const userId = getSessionItem("userId");
  const { data: orderProducts } = useQuery({
    queryKey: ["order", userId],
    queryFn: () => getProductsByProductsId(orderItemsId),
    refetchOnWindowFocus: false,
  });

  return { orderProducts };
};
