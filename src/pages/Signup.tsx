import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SignupForm from "../components/auth/signup/SignupForm";
import CheckOtherWay from "../components/auth/CheckOtherWay";

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
        <SignupForm />
        <CheckOtherWay type="signup" onClick={onClickLogin} />
      </div>
    </div>
  );
}

export default Signup;
