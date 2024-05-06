import { useQuery } from "@tanstack/react-query";
import { getSessionItem } from "../../utils/handleSession";
import { getPurchaseHistory } from "../../api/user";

export const usePurchaseHistory = () => {
  const buyerId = getSessionItem("userId");
  const { data, isLoading } = useQuery({
    queryKey: ["purchaseHistory", buyerId],
    queryFn: () => getPurchaseHistory(buyerId!),
    refetchOnWindowFocus: false,
  });

  return { data, isLoading };
};
