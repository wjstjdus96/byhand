import { useNavigate } from "react-router-dom";
import { deleteSessionItem } from "../utils/handleSession";
import { toast } from "../components/ui/use-toast";

export const useLogout = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await Promise.all([
        deleteSessionItem("userId"),
        deleteSessionItem("auth"),
      ]);
      toast({ description: "로그아웃이 완료되었습니다." });
      navigate("/");
    } catch (e) {}
  };

  return { logout };
};
