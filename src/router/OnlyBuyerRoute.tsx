import { Navigate, Outlet } from "react-router-dom";
import { checkAuthority } from "../utils/checkAuthority";

// 구매자만 - 장바구니, 마이페이지
const OnlyBuyerRoute = () => {
  const { auth, redirectedSeller, redirectedNonSeller, isSeller } =
    checkAuthority();

  return auth == "buyer" ? (
    <Outlet />
  ) : (
    <Navigate to={isSeller ? redirectedSeller : redirectedNonSeller} />
  );
};

export default OnlyBuyerRoute;
