import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export interface IUserData {
  userName: string;
  isSeller: boolean;
  userEmail: string;
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
      return res.data() as IUserData;
    }
  } catch (e) {
    alert(e);
  }
};
