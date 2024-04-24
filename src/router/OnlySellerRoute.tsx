import { Navigate, Outlet } from "react-router-dom";
import { checkAuthority } from "../utils/checkAuthority";

// 판매자만 - 판매자 페이지 전부
const OnlySellerRoute = () => {
  const { auth, redirectedNonSeller } = checkAuthority();

  return auth == "seller" ? <Outlet /> : <Navigate to={redirectedNonSeller} />;
};

export default OnlySellerRoute;
