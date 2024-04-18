import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { CustomInput } from "../components/common/Input";
import { Button } from "../components/ui/button";

function Signup() {
  const navigate = useNavigate();

  const onClickLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <h2>회원가입</h2>
        <div className="flex flex-col justify-center items-center">
          <CustomInput name="email" type="email" />
          <CustomInput name="password" type="password" />
          <CustomInput name="nickname" type="text" />
          <Button>로그인</Button>
          <div className="flex items-center">
            <p>이미 회원이신가요?</p>
            <Button variant="link" onClick={onClickLogin}>
              로그인
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
