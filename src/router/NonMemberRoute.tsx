import { Navigate, Outlet } from "react-router-dom";
import { checkAuthority } from "../utils/checkAuthority";

// 비회원만 - 로그인, 회원가입
const NonMemberRoute = () => {
  const { auth, redirectedSeller, redirectedNonSeller, isSeller } =
    checkAuthority();

  return auth == "nonMember" ? (
    <Outlet />
  ) : (
    <Navigate to={isSeller ? redirectedSeller : redirectedNonSeller} />
  );
};

export default NonMemberRoute;
