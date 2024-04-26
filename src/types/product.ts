export interface IProductRegisterReqData {
  productImage: string[];
  productName: string;
  productCategory: string;
  productPrice: number;
  productQuantity: number;
  productDescription: string;
  sellerId: string;
  createdAt: any;
  updatedAt: any;
}

export interface IProductEditReqData {
  productImage: string[];
  productName: string;
  productCategory: string;
  productPrice: number;
  productQuantity: number;
  productDescription: string;
  updatedAt: any;
}

export interface IProductFormData {
  productImage: any[];
  productName: string;
  productCategory: string;
  productPrice: number;
  productQuantity: number;
  productDescription: string;
}

export interface ICategoryType {
  value: string;
  name: string;
}

export interface IProductResData {
  productImage: string[];
  productName: string;
  productCategory: string;
  productPrice: number;
  productQuantity: number;
  productDescription: string;
  sellerId: string;
  createdAt: any;
  updatedAt: any;
  id: string;
}
