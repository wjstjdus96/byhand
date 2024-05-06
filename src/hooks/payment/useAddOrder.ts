import { useMutation } from "@tanstack/react-query";
import { FieldValue, serverTimestamp } from "firebase/firestore";
import { registerOrder } from "../../api/product";
import { getSessionItem } from "../../utils/handleSession";

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

interface IAddOrderToDB {
  orderedItems: IOrderItem[];
  orderedTotalPrice: number;
}

export const useAddOrder = () => {
  const userId = getSessionItem("userId");
  const addMutation = useMutation({
    mutationFn: (doc: IOrderReqData) => registerOrder(doc),
    onSuccess: () => {
      console.log("등록 완료");
    },
  });

  const AddOrderToDB = async ({
    orderedItems,
    orderedTotalPrice,
  }: IAddOrderToDB) => {
    const reqData: IOrderReqData = {
      buyerId: userId!,
      orderedProducts: orderedItems.map((item) => ({
        orderProductId: item.itemId,
        orderQuantity: item.itemCount,
        orderStatus: "주문완료",
      })),
      purchaseAmount: orderedTotalPrice,
      orderedAt: serverTimestamp(),
    };

    const res = addMutation.mutateAsync(reqData);

    return res;
  };
  return { AddOrderToDB };
};
