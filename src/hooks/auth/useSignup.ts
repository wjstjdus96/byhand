import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signup } from "../../api/auth";
import { setUser } from "../../api/user";
import { signupSchema } from "../../utils/validationSchema";
import { toast } from "../../components/ui/use-toast";

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

  const onSubmitHandler: SubmitHandler<ISignupData> = async (data) => {
    try {
      const sinupReq = {
        email: data.email,
        password: data.password,
      };

      const userReq = {
        userName: data.nickname,
        isSeller: data.authority == "seller",
        userEmail: data.email,
      };

      const res = await signup({ req: sinupReq });
      setUser(res.user.uid, userReq);
      toast({ description: "회원가입이 완료되었습니다" });
      navigate("/login");
    } catch (e: any) {
      if (e.code == "auth/email-already-in-use") {
        alert("이미 사용 중인 이메일입니다.");
      } else {
        alert("회원가입에 실패하였습니다");
      }
    }
  };

  const onSubmit = handleSubmit(onSubmitHandler);

  return { onSubmit, register, errors, control };
};
