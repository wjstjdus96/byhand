import { serverTimestamp } from "firebase/firestore";
import { ISignupData } from "../components/auth/signup/SignupForm";
import { IProductEditReqData, IProductFormData } from "../types/product";
import { getSessionItem } from "./handleSession";

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
    nickName: data.nickname,
    isSeller: data.authority == "seller",
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
