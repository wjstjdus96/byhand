import { useQuery } from "@tanstack/react-query";
import { getPurchaseHistory } from "../../api/user";
import { useUserStore } from "../../store/userStore";

export const usePurchaseHistory = () => {
  const { user } = useUserStore();
  const { data, isLoading } = useQuery({
    queryKey: ["purchaseHistory", user?.uid],
    queryFn: () => getPurchaseHistory(user?.uid!),
    refetchOnWindowFocus: false,
  });

  return { data, isLoading };
};
