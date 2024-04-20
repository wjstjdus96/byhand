import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "./firebase";
import { getSessionItem } from "../utils/handleSession";

interface IRegisterProduct {
  req: any; //임시라도 any 사용 금지하자
}

export const registerProduct = async ({ req }: IRegisterProduct) => {
  try {
    const res = await addDoc(collection(db, "product"), req);
    return res;
  } catch (e) {
    alert(e);
  }
};

export const getProduct = async (uid: string | null) => {
  //   try {

  //   } catch (e) {
  //     alert(e);
  //   }
  const q = query(collection(db, "product"), where("sellerId", "==", uid));
  const querySnapShot = await getDocs(q);
  const res = querySnapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  return res;
};
