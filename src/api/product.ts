import {
  OrderByDirection,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  increment,
  limit,
  orderBy,
  query,
  startAfter,
  updateDoc,
  where,
} from "firebase/firestore";
import { IProductRegisterReqData, IProductResData } from "../types/product";
import { db } from "./firebase";
import { IOrderItem, IOrderReqData } from "../hooks/payment/useAddOrder";

export const registerProduct = async (req: IProductRegisterReqData) => {
  const res = await addDoc(collection(db, "product"), req);
  return res;
};

export const registerOrder = (req: IOrderReqData) => {
  return addDoc(collection(db, "order"), req);
};

export const deleteProduct = async (productId: string) => {
  const res = await deleteDoc(doc(db, "product", productId));
  return res;
};

export const getOneProduct = async (productId: string) => {
  const docRef = doc(db, "product", productId);
  const docSnap = await getDoc(docRef);
  return docSnap.data() as IProductResData;
};

export const updateProduct = async (productId: string, data: any) => {
  const docRef = doc(db, "product", productId);
  const res = await updateDoc(docRef, data);
  return res;
};

export const getSellerProducts = async (
  uid: string,
  limitNum?: number,
  pageParam?: any
) => {
  let q = query(
    collection(db, "product"),
    where("sellerId", "==", uid),
    orderBy("updatedAt", "desc")
  );

  if (pageParam && limitNum) {
    q = query(q, startAfter(pageParam), limit(limitNum));
  } else if (limitNum) {
    q = query(q, limit(limitNum));
  }

  const querySnapShot = await getDocs(q);
  return querySnapShot;
};

//제한 있는 경우 없는 경우 합쳐서, 카테고리 분류도 나눠서
interface IGetProducts {
  keyword?: string;
  category?: string;
  limitNum?: number;
  pageParam?: any;
  sort: string;
  isInfiniteScroll?: boolean;
}

export const getProducts = async ({
  category,
  limitNum,
  sort,
  pageParam,
  keyword,
  isInfiniteScroll,
}: IGetProducts) => {
  try {
    let q = query(collection(db, "product"));

    const sortType: [string, OrderByDirection] = sort.split("-") as [
      string,
      OrderByDirection
    ];

    if (sort) {
      q = query(q, orderBy(sortType[0], sortType[1]));
    }
    if (keyword) {
      q = query(
        q,
        where("productName", ">=", keyword),
        where("productName", "<=", keyword + "\uf8ff")
      );
    }
    if (category && category != "total") {
      q = query(q, where("productCategory", "==", category));
    }
    if (pageParam && limitNum) {
      q = query(q, startAfter(pageParam), limit(limitNum));
    }
    if (limitNum) {
      q = query(q, limit(limitNum));
    }

    const querySnapShot = await getDocs(q);

    if (isInfiniteScroll) {
      return querySnapShot;
    }

    const res = querySnapShot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as IProductRegisterReqData),
    }));
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const getProductsByProductsId = async (
  productIds: string[]
): Promise<IProductResData[]> => {
  const productsPromise = productIds.map(async (productId) => {
    const docRef = doc(db, "product", productId);
    const docSnap = await getDoc(docRef);
    return {
      id: docSnap.id,
      ...(docSnap.data() as IProductRegisterReqData),
    };
  });

  const productsArr = await Promise.all(productsPromise);
  const products = productsArr.flat();
  return products;
};

export const updateProductsQuantity = async (orderedItems: IOrderItem[]) => {
  try {
    for (const { itemId, itemCount } of orderedItems) {
      const productRef = doc(db, "product", itemId);

      await updateDoc(productRef, {
        productQuantity: increment(-1 * itemCount),
      });
    }
  } catch (e) {
    console.log(e);
  }
};
