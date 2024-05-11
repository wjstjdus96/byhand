import { useNavigate } from "react-router-dom";
import CheckOtherWay from "../components/auth/CheckOtherWay";
import SignupForm from "../components/auth/signup/SignupForm";
import AuthLayout from "../layout/AuthLayout";

function Signup() {
  const navigate = useNavigate();

  const onClickLogin = () => {
    navigate("/login");
  };

  return (
    <AuthLayout>
      <h2 className="font-bold text-3xl">회원가입</h2>
      <SignupForm />
      <CheckOtherWay type="signup" onClick={onClickLogin} />
    </AuthLayout>
  );
}

export default Signup;
