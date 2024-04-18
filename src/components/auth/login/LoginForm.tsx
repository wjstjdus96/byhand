import { useNavigate } from "react-router-dom";
import { CustomInput } from "../../common/Input";
import { Button } from "../../ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { auth } from "../../../api/auth";

interface ILoginData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { register, handleSubmit } = useForm<ILoginData>();
  const navigate = useNavigate();

  const onSubmitHandler: SubmitHandler<ILoginData> = (data) => {
    try {
      if (data) {
        const req = {
          email: data.email,
          password: data.password,
          returnSecureToken: true,
        };
        auth("signInWithPassword", req).then((res) => console.log(res));
      }
    } catch (e: any) {
      alert(e.response.data);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="flex flex-col justify-center items-center"
    >
      <CustomInput name="email" register={register} type="email" />
      <CustomInput name="password" register={register} type="password" />
      <Button type="submit" className="w-full">
        로그인
      </Button>
    </form>
  );
};

export default LoginForm;
