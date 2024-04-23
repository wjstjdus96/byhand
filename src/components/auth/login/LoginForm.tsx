import { useNavigate } from "react-router-dom";
import { TextInput } from "../../common/form/TextInput";
import { Button } from "../../ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { auth } from "../../../api/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../../utils/validationSchema";
import { getUser } from "../../../api/user";
import { setSessionItem } from "../../../utils/handleSession";
import { authReq } from "../../../utils/dataSchema";

interface ILoginData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginData>({ resolver: zodResolver(loginSchema) });
  const navigate = useNavigate();

  const onHandleRedirct = (isSeller: boolean, userId?: string) => {
    if (isSeller) navigate(`/admin/${userId}`);
    else navigate("/");
  };

  const onSubmitHandler: SubmitHandler<ILoginData> = (data) => {
    try {
      const req = authReq(data);

      auth("signInWithPassword", req)
        .then(async (res) => {
          if (res.status == 200) {
            const data = await getUser({ uid: res.data.localId });
            if (data) {
              setSessionItem("userId", res.data.localId);
              setSessionItem("auth", data.isSeller);
              onHandleRedirct(data.isSeller, res.data.localId);
            }
          }
        })
        .catch((e) => {
          const errorMsg = e.response.data.error.message;
          if (errorMsg == "EMAIL_NOT_FOUND") {
            alert("이메일이 틀렸습니다");
          }
          if (errorMsg == "INVALID_PASSWORD") {
            alert("비밀번호가 틀렸습니다");
          }
        });
    } catch (e: any) {
      alert(e.response.data);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="flex flex-col justify-center items-center w-1/4 gap-6"
    >
      <TextInput
        name="email"
        register={register}
        type="email"
        label="이메일"
        errorMsg={errors.email?.message}
      />
      <TextInput
        name="password"
        register={register}
        type="password"
        label="비밀번호"
        errorMsg={errors.password?.message}
      />
      <Button type="submit" className="w-full">
        로그인
      </Button>
    </form>
  );
};

export default LoginForm;
