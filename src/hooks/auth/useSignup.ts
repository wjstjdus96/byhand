import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { signupSchema } from "../../utils/validationSchema";
import { useNavigate } from "react-router-dom";
import { authReq, setUserReq } from "../../utils/dataSchema";
import { auth } from "../../api/auth";
import { setUser } from "../../api/user";

export interface ISignupData {
  email: string;
  password: string;
  confirmPassword: string;
  nickname: string;
  authority: string;
}

export const useSignup = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ISignupData>({
    resolver: zodResolver(signupSchema),
  });
  const navigate = useNavigate();

  const onSubmitHandler: SubmitHandler<ISignupData> = (data) => {
    try {
      const sinupReq = authReq(data);
      const userReq = setUserReq(data);

      auth("signUp", sinupReq)
        .then(async (res) => {
          if (res.status == 200) {
            setUser(res.data.localId, userReq);
            navigate("/login");
          }
        })
        .catch((e) => {
          const errorMsg = e.response.data.error.message;
          if (errorMsg == "EMAIL_EXISTS") {
            alert("해당 이메일 주소는 이미 다른 계정에서 사용 중입니다.");
          }
        });
    } catch (e: any) {
      alert(e.response.data);
    }
  };

  const onSubmit = handleSubmit(onSubmitHandler);

  return { onSubmit, register, errors, control };
};
