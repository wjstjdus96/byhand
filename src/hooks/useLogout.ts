import { useNavigate } from "react-router-dom";
import { toast } from "../components/ui/use-toast";
import { useUserStore } from "../store/userStore";

export const useLogout = () => {
  const navigate = useNavigate();
  const { setUser } = useUserStore();

  const logout = async () => {
    try {
      setUser(null);
      toast({ description: "로그아웃이 완료되었습니다.", duration: 700 });
      navigate("/");
    } catch (e) {}
  };

  return { logout };
};
