import { useQuery } from "@tanstack/react-query";
import { getProductsByProductsId } from "../../api/product";
import { useUserStore } from "../../store/userStore";

export const useProductsByOrderIds = ({
  orderItemsId,
}: {
  orderItemsId: string[];
}) => {
  const { user } = useUserStore();
  const { data: orderProducts, isLoading: isOrderProductsLoading } = useQuery({
    queryKey: ["order", user?.uid],
    queryFn: () => getProductsByProductsId(orderItemsId),
    refetchOnWindowFocus: false,
    staleTime: 0,
  });

  return { orderProducts, isOrderProductsLoading };
};
