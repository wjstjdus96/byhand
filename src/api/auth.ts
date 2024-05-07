import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getUser } from "./user";

interface IAuth {
  email: string;
  password: string;
}

export const authin = getAuth();

export const login = async ({ req }: { req: IAuth }) => {
  return await signInWithEmailAndPassword(authin, req.email, req.password)
    .then((res) => {
      return getUser({ uid: res.user.uid });
    })
    .catch((err) => {
      if (err.code == "auth/invalid-credential") {
        alert("아이디 또는 비밀번호를 잘못 입력했습니다.");
      } else {
        alert("일시적 오류로 로그인 할 수 없습니다. 잠시후 다시 시도해주세요");
      }
    });
};

export const signup = async ({ req }: { req: IAuth }) => {
  return await createUserWithEmailAndPassword(authin, req.email, req.password)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      if (err.code == "auth/email-already-in-use") {
        alert("이미 사용 중인 이메일입니다.");
      } else {
        alert("일시적 오류로 로그인 할 수 없습니다. 잠시후 다시 시도해주세요");
      }
    });
};
