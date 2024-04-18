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
      <div className="flex flex-col justify-center items-center bg-slate-400">
        <h2>로그인</h2>
        <LoginForm />
        <CheckOtherWay type="login" onClick={onClickSignup} />
      </div>
    </div>
  );
}

export default Login;
