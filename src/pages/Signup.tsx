import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import CheckAlready from "../components/auth/CheckAlready";
import SignupForm from "../components/auth/SignupForm";

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
        <CheckAlready type="signup" onClick={onClickLogin} />
      </div>
    </div>
  );
}

export default Signup;
