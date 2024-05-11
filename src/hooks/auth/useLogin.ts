import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/auth";
import { getUser } from "../../api/user";
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

  const onSubmitHandler: SubmitHandler<ILoginData> = async (data) => {
    try {
      const req = {
        email: data.email,
        password: data.password,
      };

      const res = await login({ req });

      getUser({ uid: res.user.uid })
        .then((res) => {
          if (res) {
            setUser(res);
            onHandleRedirct(res.isSeller, res.uid);
          }
        })
        .catch((err) => {
          alert(err);
        });
    } catch (err: any) {
      if (err.code == "auth/invalid-credential") {
        alert("아이디 또는 비밀번호를 잘못 입력했습니다.");
      } else {
        alert("일시적 오류로 로그인 할 수 없습니다. 잠시후 다시 시도해주세요");
      }
      reset();
    }
  };

  const onSubmit = handleSubmit(onSubmitHandler);

  return { register, onSubmit, errors };
};
