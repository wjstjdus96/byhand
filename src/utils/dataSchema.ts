import { serverTimestamp } from "firebase/firestore";
import { IProductEditReqData, IProductFormData } from "../types/product";
import { getSessionItem } from "./handleSession";
import { ISignupData } from "../hooks/auth/useSignup";

interface IAuthReq {
  email: string;
  password: string;
}

export const authReq = (data: IAuthReq) => {
  return {
    email: data.email,
    password: data.password,
    returnSecureToken: true,
  };
};

export const setUserReq = (data: ISignupData) => {
  return {
    userName: data.nickname,
    isSeller: data.authority == "seller",
    userEmail: data.email,
  };
};

export const registerReq = (data: IProductFormData, imageData: string[]) => {
  return {
    sellerId: getSessionItem("userId")!,
    productImage: imageData,
    productName: data.productName,
    productCategory: data.productCategory,
    productPrice: Number(data.productPrice),
    productQuantity: Number(data.productQuantity),
    productDescription: data.productDescription,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };
};

export const editReq = (
  data: IProductFormData,
  imageData: string[]
): IProductEditReqData => {
  return {
    productImage: imageData,
    productName: data.productName,
    productCategory: data.productCategory,
    productPrice: Number(data.productPrice),
    productQuantity: Number(data.productQuantity),
    productDescription: data.productDescription,
    updatedAt: serverTimestamp(),
  };
};
