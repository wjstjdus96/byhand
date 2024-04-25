import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  updateDoc,
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
    orderBy("updatedAt", "desc")
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

export const getSellerFirstDocs = async (uid: string) => {
  const first = query(
    collection(db, "product"),
    where("sellerId", "==", uid),
    orderBy("sellerId"),
    orderBy("updatedAt", "desc"),
    limit(10)
  );

  const docSnap = await getDocs(first);
  return docSnap;
};

export const getSellerNextDocs = async (uid: string, pageParam: any) => {
  const next = query(
    collection(db, "product"),
    where("sellerId", "==", uid),
    orderBy("sellerId"),
    orderBy("updatedAt", "desc"),
    startAfter(pageParam),
    limit(10)
  );
  const docSnap = await getDocs(next);
  return docSnap;
};

//제한 있는 경우 없는 경우 합쳐서, 카테고리 분류도 나눠서
interface IGetProducts {
  category?: string;
  limitNum?: number;
  pageParam?: number;
  sort?: string;
}

export const temp_getProducts = async ({
  category,
  limitNum,
  sort = "updatedAt",
  pageParam,
}: IGetProducts) => {
  let q = query(collection(db, "product"));

  let q1 = query(q, where("productCategory", "==", category));
  if (limitNum) {
    q1 = query(q1, limit(limitNum));
  }
  const querySnapShot1 = await getDocs(q1);
  const res1 = querySnapShot1.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  console.log(res1);
  return res1;
};

export const getProducts = async ({
  category,
  limitNum,
  sort = "updatedAt",
  pageParam,
}: IGetProducts) => {
  let q = query(collection(db, "product"));

  const q1 = query(
    q,
    where("productCategory", "==", category),
    orderBy("updatedAt", "desc"),
    orderBy("updatedAt", "desc")
  );
  const querySnapShot1 = await getDocs(q1);
  const res1 = querySnapShot1.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  console.log(res1);

  if (sort) {
    q = query(q, orderBy(sort, "desc"));
  }
  if (category) {
    q = query(q, where("productCategory", "==", category));
  }
  if (pageParam && limitNum) {
    q = query(q, startAfter(pageParam), limit(limitNum));
  }
  if (limitNum) {
    q = query(q, limit(limitNum));
  }

  console.log(q);
  const querySnapShot = await getDocs(q);
  console.log(querySnapShot);
  const res = querySnapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  return res;
};
