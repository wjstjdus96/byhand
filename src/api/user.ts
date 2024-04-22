import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

interface ISetUser {
  uid: string;
  req: IUserData;
}

interface IUserData {
  nickName: string;
  isSeller: boolean;
}

export const setUser = async (uid: string, req: IUserData) => {
  try {
    const res = await setDoc(doc(db, "users", uid), req);
    return res;
  } catch (e) {
    alert(e);
  }
};

export const getUser = async ({ uid }: { uid: string }) => {
  try {
    const res = await getDoc(doc(db, "users", uid));
    if (res.exists()) {
      return res.data();
    }
  } catch (e) {
    alert(e);
  }
};
