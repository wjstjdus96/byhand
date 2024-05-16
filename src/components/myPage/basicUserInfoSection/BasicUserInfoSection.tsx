import { useLogout } from "../../../hooks/useLogout";
import { useUserStore } from "../../../store/userStore";
import { Button } from "../../ui/button";

const BasicUserInfoSection = () => {
  const { user } = useUserStore();
  const { logout } = useLogout();

  return (
    <div>
      <h5 className="text-lg font-semibold mb-3">기본정보</h5>
      <div className="flex justify-between items-center p-2">
        <div>
          <p>{user?.userName}</p>
          <p>{user?.userEmail}</p>
        </div>
        <Button onClick={logout}>로그아웃</Button>
      </div>
    </div>
  );
};

export default BasicUserInfoSection;
