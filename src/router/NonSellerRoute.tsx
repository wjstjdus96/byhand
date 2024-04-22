import { Navigate, Outlet } from "react-router-dom";
import { checkAuthority } from "../utils/checkAuthority";
import { getSessionItem } from "../utils/handleSession";

// 비회원,구매자만 - 홈, 전체상품, 상품상세
const NonSellerRoute = () => {
  const { auth, redirectedSeller } = checkAuthority();

  return auth != "seller" ? <Outlet /> : <Navigate to={redirectedSeller} />;
};

export default NonSellerRoute;
