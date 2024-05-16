export interface IProductRegisterReqData {
  productThumbnail: string;
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
  // productThumbnail: string;
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
  productThumbnail: string;
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
