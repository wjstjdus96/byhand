import { useMutation } from "@tanstack/react-query";
import { serverTimestamp } from "firebase/firestore";
import { registerOrder } from "../../api/product";
import { useUserStore } from "../../store/userStore";
import { IOrderItem, IOrderReqData } from "../../types/order";

interface IAddOrderToDB {
  orderedItems: IOrderItem[];
  orderedTotalPrice: number;
}

export const useAddOrder = () => {
  const { user } = useUserStore();
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
      buyerId: user?.uid!,
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
