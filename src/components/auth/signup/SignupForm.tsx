import { SubmitHandler, useForm } from "react-hook-form";
import { auth } from "../../../api/auth";
import { CustomInput } from "../../common/Input";
import { Button } from "../../ui/button";
import SelectAuthority from "./SelectAuthority";
import { useNavigate } from "react-router-dom";

interface ISignupData {
  email: string;
  password: string;
  nickname: string;
  authority: string;
}

const SignupForm = () => {
  const { register, handleSubmit, control } = useForm<ISignupData>();
  const navigate = useNavigate();

  const onSubmitHandler: SubmitHandler<ISignupData> = (data) => {
    try {
      const req = {
        email: data.email,
        password: data.password,
        returnSecureToken: true,
      };
      auth("signUp", req)
        .then((res) => {
          if (res.status == 200) {
            navigate("/login");
          }
        })
        .catch((e) => {
          const errorMsg = e.response.data.error.message;
          if (errorMsg == "EMAIL_EXISTS") {
            alert("해당 이메일 주소는 이미 다른 계정에서 사용 중입니다.");
          }
        });
    } catch (e: any) {
      console.log(e);
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
