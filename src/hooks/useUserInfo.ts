import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/user";
import { getSessionItem } from "../utils/handleSession";

export const useUserInfo = () => {
  const uid = getSessionItem("userId");
  const { data } = useQuery({
    queryKey: ["user", uid],
    queryFn: () => getUser({ uid: uid! }),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  return { data };
};
