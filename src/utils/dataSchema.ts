import { serverTimestamp } from "firebase/firestore";
import { ISignupData } from "../components/auth/signup/SignupForm";
import { getSessionItem } from "./handleSession";
import { IRegisterFormData } from "../types/product";

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

export const registerReq = (data: IRegisterFormData, imageData: string[]) => {
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

export const editReq = (data: IRegisterFormData, imageData: string[]) => {
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
