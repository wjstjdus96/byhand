import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/auth";
import { useUserStore } from "../../store/userStore";
import { loginSchema } from "../../utils/validationSchema";

interface ILoginData {
  email: string;
  password: string;
}

export const useLogin = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILoginData>({ resolver: zodResolver(loginSchema) });
  const { setUser } = useUserStore();
  const navigate = useNavigate();

  const onHandleRedirct = (isSeller: boolean, userId: string) => {
    if (isSeller) navigate(`/admin/${userId}`);
    else navigate("/");
  };

  const onSubmitHandler: SubmitHandler<ILoginData> = (data) => {
    try {
      const req = {
        email: data.email,
        password: data.password,
      };

      login({ req })
        .then((res) => {
          if (res) {
            setUser(res);
            onHandleRedirct(res.isSeller, res.uid);
          } else {
            reset();
          }
        })
        .catch((e) => alert("에러가 발생했습니다" + e));
    } catch (e: any) {
      alert(e.response.data);
    }
  };

  const onSubmit = handleSubmit(onSubmitHandler);

  return { register, onSubmit, errors };
};
