export interface IProductData {
  productImage: string[];
  productName: string;
  productCategory: string;
  productPrice: number;
  productQuantity: number;
  productDescription: string;
  sellerId?: string;
  createdAt?: any;
  updatedAt: any;
}

export interface IRegisterFormData {
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
