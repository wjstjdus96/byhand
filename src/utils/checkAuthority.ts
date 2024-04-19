import { getSessionItem } from "./handleSession";

export const checkAuthority = () => {
  const info = getSessionItem("auth");

  if (info == null) return "nonMember";
  if (info) return "seller";
  if (!info) return "buyer";
};
