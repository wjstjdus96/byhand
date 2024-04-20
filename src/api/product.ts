import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "./firebase";

interface IRegisterProduct {
  req: any; //임시라도 any 사용 금지하자
}

export const registerProduct = async ({ req }: IRegisterProduct) => {
  const res = await addDoc(collection(db, "product"), req);
  return res;
};

export const getProduct = async (uid: string | null) => {
  const q = query(
    collection(db, "product"),
    where("sellerId", "==", uid),
    orderBy("sellerId"),
    orderBy("updatedAt")
  );
  const querySnapShot = await getDocs(q);
  const res = querySnapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  return res;
};
