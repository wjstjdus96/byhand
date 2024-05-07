import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/user";
import { useUserStore } from "../store/userStore";

export const useUserInfo = () => {
  const { user } = useUserStore();
  const { data: userInfo, isLoading: isuserInfoLoading } = useQuery({
    queryKey: ["user", user?.uid],
    queryFn: () => getUser({ uid: user?.uid! }),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  return { userInfo, isuserInfoLoading };
};
