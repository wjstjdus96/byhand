import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/user";

export const useUserInfo = ({ uid }: { uid: string }) => {
  const { data } = useQuery({
    queryKey: ["user", uid],
    queryFn: () => getUser({ uid }),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  return { data };
};
