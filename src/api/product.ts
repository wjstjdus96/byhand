import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "./firebase";
import { IProductData } from "../components/admin/register/RegisterForm";

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

export const deleteProduct = async (productId: string) => {
  const res = await deleteDoc(doc(db, "product", productId));
  return res;
};

export const getOneProduct = async (productId: string) => {
  const docRef = doc(db, "product", productId);
  const docSnap = await getDoc(docRef);

  return docSnap.data();
};

export const updateProduct = async (
  productId: string,
  data: {
    productImage: string[];
    productName: string;
    productCategory: string;
    productPrice: number;
    productQuantity: number;
    productDescription: string;
    updatedAt: any;
  }
) => {
  const docRef = doc(db, "product", productId);
  const res = await updateDoc(docRef, data);
  return res;
};
