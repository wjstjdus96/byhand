import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";

const Custom404 = () => {
  const navigate = useNavigate();
  const onClickHome = () => {
    navigate("/");
  };

  return (
    <div className="w-screen h-screen flex flex-col gap-12 items-center justify-center">
      <span className="text-2xl font-semibold">찾을 수 없는 페이지입니다.</span>
      <Button onClick={onClickHome}>홈으로 돌아가기</Button>
    </div>
  );
};

export default Custom404;
