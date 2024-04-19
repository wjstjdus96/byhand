import { getSessionItem } from "./handleSession";

export const checkAuthority = () => {
  const info = getSessionItem("auth");

  if (info == "true") return "seller";
  if (info == "false") return "buyer";
  return "nonMember";
};
