import { useLogin } from "../../../hooks/auth/useLogin";
import { TextInput } from "../../common/form/TextInput";
import { Button } from "../../ui/button";

const LoginForm = () => {
  const { register, onSubmit, errors } = useLogin();

  return (
    <form
      onSubmit={onSubmit}
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
