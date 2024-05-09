import { FieldValue } from "firebase/firestore";

export interface IAddressFormData {
  recipientName: string;
  recipientPhone: string;
  deliveryAddress: string;
  deliveryPostcode: string;
}

export interface IAddressInfo {
  recipientName: string;
  recipientPhone: string;
  deliveryAddress: string;
  deliveryPostCode: string;
}

export interface IOrderReqData {
  buyerId: string;
  orderedProducts: IOrderedProduct[];
  purchaseAmount: number;
  orderedAt: FieldValue | any;
}

export interface IOrderResData {
  purchaseId: string;
  buyerId: string;
  orderedProducts: IOrderedProduct[];
  purchaseAmount: number;
  orderedAt: FieldValue | any;
}

export interface IOrderedProduct {
  orderProductId: string;
  orderQuantity: number;
  orderStatus: "주문완료" | "발송대기" | "발송시작" | "주문취소";
}

export interface IOrderItem {
  itemId: string;
  itemCount: number;
}

export interface IPaymentState {
  orderedItems: IOrderItem[];
  orderedTotalPrice: number;
  isCartItems?: boolean;
}
