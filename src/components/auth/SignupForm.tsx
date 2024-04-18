import { SubmitHandler, useForm } from "react-hook-form";
import { CustomInput } from "../common/Input";
import { Button } from "../ui/button";
import SelectAuthority from "./SelectAuthority";

interface ISignupData {
  email: string;
  password: string;
  nickname: string;
  isSeller: boolean;
}

const SignupForm = () => {
  const { register, handleSubmit, control } = useForm<ISignupData>();

  const onSubmitHandler: SubmitHandler<ISignupData> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="flex flex-col justify-center items-center gap-4"
    >
      <CustomInput name="email" register={register} type="email" />
      <CustomInput name="password" register={register} type="password" />
      <CustomInput name="nickname" register={register} type="text" />
      <SelectAuthority control={control} />
      <Button type="submit" className="w-full">
        회원가입
      </Button>
    </form>
  );
};

export default SignupForm;
