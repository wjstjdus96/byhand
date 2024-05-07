// import { getSessionItem } from "./handleSession";

// export const checkAuthority = (userId: string, isSeller: boolean) => {
//   const sessionAuth = getSessionItem("auth");
//   const userId = getSessionItem("userId");

//   let auth = "";
//   if (sessionAuth == "true") auth = "seller";
//   if (sessionAuth == "false") auth = "buyer";
//   if (!sessionAuth) auth = "nonMember";

//   const redirectedSeller = `/admin/${userId}`;
//   const redirectedNonSeller = "/";
//   const isSeller = sessionAuth == "seller";

//   return { auth, redirectedSeller, redirectedNonSeller, isSeller, userId };
// };
