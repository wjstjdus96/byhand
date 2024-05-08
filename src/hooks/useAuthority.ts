import { useUserStore } from "../store/userStore";

export const useAuthority = () => {
  const { user } = useUserStore();

  let auth = "";
  if (user?.isSeller == true) auth = "seller";
  if (user?.isSeller == false) auth = "buyer";
  if (user == null) auth = "nonMember";

  const redirectedSeller = `/admin/${user?.uid}`;
  const redirectedNonSeller = "/";

  return { auth, redirectedSeller, redirectedNonSeller };
};
