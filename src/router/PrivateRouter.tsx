import { Navigate, Outlet } from "react-router-dom";
import { useAuthority } from "../hooks/useAuthority";
import { useUserStore } from "../store/userStore";

const PrivateRouter = ({ allowed }: { allowed: string[] }) => {
  const { auth, redirectedNonSeller, redirectedSeller } = useAuthority();
  const { user } = useUserStore();

  if (allowed.includes(auth)) {
    return <Outlet />;
  }

  const redirectedUrl = user?.isSeller ? redirectedSeller : redirectedNonSeller;

  return <Navigate to={redirectedUrl} />;
};

export default PrivateRouter;
