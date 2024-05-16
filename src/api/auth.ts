import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

export interface IAuth {
  email: string;
  password: string;
}

export const authin = getAuth();

export const login = ({ req }: { req: IAuth }) => {
  return signInWithEmailAndPassword(authin, req.email, req.password);
};

export const signup = ({ req }: { req: IAuth }) => {
  return createUserWithEmailAndPassword(authin, req.email, req.password);
};
