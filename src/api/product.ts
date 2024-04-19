import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";

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
