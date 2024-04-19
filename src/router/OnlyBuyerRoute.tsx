import { Navigate, Outlet } from "react-router-dom";
import { checkAuthority } from "../utils/checkAuthority";
import { getSessionItem } from "../utils/handleSession";

// 구매자만 - 장바구니, 마이페이지
const OnlyBuyerRoute = () => {
  const auth = checkAuthority();
  const userId = getSessionItem("userId");
  const redirctedURL = auth == "seller" ? `/admin/":${userId}` : "/";

  return auth == "buyer" ? <Outlet /> : <Navigate to={redirctedURL} />;
};

export default OnlyBuyerRoute;
