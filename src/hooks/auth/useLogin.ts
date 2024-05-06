import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginSchema } from "../../utils/validationSchema";
import { authReq } from "../../utils/dataSchema";
import { auth } from "../../api/auth";
import { getUser } from "../../api/user";
import { setSessionItem } from "../../utils/handleSession";
import { useNavigate } from "react-router-dom";

interface ILoginData {
  email: string;
  password: string;
}

export const useLogin = () => {
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
              setSessionItem("auth", data.isSeller.toString());
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

  const onSubmit = handleSubmit(onSubmitHandler);

  return { register, onSubmit, errors };
};
