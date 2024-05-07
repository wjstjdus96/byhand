import {
  doc,
  setDoc,
  getDoc,
  query,
  collection,
  where,
  orderBy,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";
import {
  IOrderReqData,
  IOrderResData,
  IOrderedProduct,
} from "../hooks/payment/useAddOrder";

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

export const getPurchaseHistory = async (buyerId: string) => {
  try {
    let q = query(
      collection(db, "order"),
      where("buyerId", "==", buyerId),
      orderBy("orderedAt", "desc")
    );
    const querySnapshot = await getDocs(q);
    const res: IOrderResData[] = querySnapshot.docs.map((doc) => ({
      purchaseId: doc.id,
      ...(doc.data() as IOrderReqData),
    }));

    return res;
  } catch (e) {
    console.log(e);
  }
};

export const updatePurchaseHistory = async (
  data: IOrderedProduct[],
  historyId: string
) => {
  try {
    const historyItemRef = doc(db, "order", historyId);
    await updateDoc(historyItemRef, {
      orderedProducts: data,
    });
  } catch (e) {
    console.log(e);
  }
};
