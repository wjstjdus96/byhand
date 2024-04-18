import { SubmitHandler, useForm } from "react-hook-form";
import { CustomInput } from "../common/Input";
import { Button } from "../ui/button";
import SelectAuthority from "./SelectAuthority";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface ISignupData {
  email: string;
  password: string;
  nickname: string;
  authority: string;
}

const SignupForm = () => {
  const { register, handleSubmit, control } = useForm<ISignupData>();

  const onSubmitHandler: SubmitHandler<ISignupData> = (data) => {
    try {
      const req = {
        email: data!.email,
        password: data!.password,
        returnSecureToken: true,
      };
      if (data) {
        axios.post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCEwcvhiu_XgueDrEsAYtWdS07i1SNgzrA`,
          req,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
      }
    } catch (e: any) {
      alert(e.response.data);
    }
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
