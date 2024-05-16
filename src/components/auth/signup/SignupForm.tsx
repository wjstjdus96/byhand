import { useSignup } from "../../../hooks/auth/useSignup";
import { TextInput } from "../../common/form/TextInput";
import { Button } from "../../ui/button";
import SelectAuthority from "./SelectAuthority";

const SignupForm = () => {
  const { onSubmit, register, errors, control } = useSignup();

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
      <TextInput
        name="confirmPassword"
        register={register}
        type="password"
        label="비밀번호 확인"
        errorMsg={errors.confirmPassword?.message}
      />
      <TextInput
        name="nickname"
        register={register}
        label="닉네임"
        errorMsg={errors.nickname?.message}
      />
      <SelectAuthority control={control} errorMsg={errors.authority?.message} />
      <Button type="submit" className="w-full">
        회원가입
      </Button>
    </form>
  );
};

export default SignupForm;
