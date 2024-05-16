import { useNavigate } from "react-router-dom";
import CheckOtherWay from "../components/auth/CheckOtherWay";
import LoginForm from "../components/auth/login/LoginForm";
import AuthLayout from "../layout/AuthLayout";

function Login() {
  const navigate = useNavigate();

  const onClickSignup = () => {
    navigate("/signup");
  };

  return (
    <AuthLayout>
      <h2 className="font-bold text-3xl">로그인</h2>
      <LoginForm />
      <CheckOtherWay type="login" onClick={onClickSignup} />
    </AuthLayout>
  );
}

export default Login;
