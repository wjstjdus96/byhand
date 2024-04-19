import { Navigate, Outlet } from "react-router-dom";
import { checkAuthority } from "../utils/checkAuthority";
import { getSessionItem } from "../utils/handleSession";

// 비회원만 - 로그인, 회원가입
const NonMemberRoute = () => {
  const auth = checkAuthority();
  const userId = getSessionItem("userId");
  const redirctedURL = auth == "seller" ? `/admin/":${userId}` : "/";

  return auth == "nonMember" ? <Outlet /> : <Navigate to={redirctedURL} />;
};

export default NonMemberRoute;
