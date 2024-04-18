import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { CustomInput } from "../components/common/Input";
import { Button } from "../components/ui/button";

function Login() {
  const navigate = useNavigate();

  const onClickSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="h-screen">
      <Header />
      <div className="flex flex-col justify-center items-center">
        <h2>로그인</h2>
        {/* <div className="flex flex-col justify-center items-center">
          <CustomInput name="email" type="email" />
          <CustomInput name="password" type="password" />
          <Button className="w-full">로그인</Button>
          <div className="flex items-center">
            <p>아직 회원이 아니신가요?</p>
            <Button variant="link" onClick={onClickSignup}>
              회원가입
            </Button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Login;
