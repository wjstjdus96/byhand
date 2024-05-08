import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signup } from "../../api/auth";
import { setUser } from "../../api/user";
import { signupSchema } from "../../utils/validationSchema";

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
      const sinupReq = {
        email: data.email,
        password: data.password,
      };

      const userReq = {
        userName: data.nickname,
        isSeller: data.authority == "seller",
        userEmail: data.email,
      };

      signup({ req: sinupReq }).then((res) => {
        if (res) {
          setUser(res.user.uid, userReq);
          navigate("/login");
        }
      });
    } catch (e: any) {
      alert(e.response.data);
    }
  };

  const onSubmit = handleSubmit(onSubmitHandler);

  return { onSubmit, register, errors, control };
};
