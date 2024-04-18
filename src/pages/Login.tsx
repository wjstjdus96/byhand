import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import LoginForm from "../components/auth/login/LoginForm";
import CheckOtherWay from "../components/auth/CheckOtherWay";

function Login() {
  const navigate = useNavigate();
  const onClickSignup = () => {
    navigate("/signup");
  };
  return (
    <div className="h-screen">
      <Header />
      <div className="flex flex-col justify-center items-center h-[90vh] gap-6">
        <h2 className="font-bold text-3xl">로그인</h2>
        <LoginForm />
        <CheckOtherWay type="login" onClick={onClickSignup} />
      </div>
    </div>
  );
}

export default Login;
