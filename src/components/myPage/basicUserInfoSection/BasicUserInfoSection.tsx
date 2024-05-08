import { useLogout } from "../../../hooks/useLogout";
import { useUserInfo } from "../../../hooks/useUserInfo";
import { Button } from "../../ui/button";

const BasicUserInfoSection = () => {
  const { userInfo } = useUserInfo();
  const { logout } = useLogout();

  return (
    <div>
      <h5 className="text-lg font-semibold mb-3">기본정보</h5>
      <div className="flex justify-between items-center p-2">
        <div>
          <p>{userInfo?.userName}</p>
          <p>{userInfo?.userEmail}</p>
        </div>
        <Button onClick={logout}>로그아웃</Button>
      </div>
    </div>
  );
};

export default BasicUserInfoSection;
