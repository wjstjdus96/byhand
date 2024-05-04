import { useMutation } from "@tanstack/react-query";
import { updatePurchaseHistory } from "../../api/user";
import { IOrderedProduct } from "../payment/useAddOrder";
import { queryClient } from "../../App";

interface IUseOrderCancel {
  historyItems: IOrderedProduct[];
  historyId: string;
  itemIdx: number;
}

export const useOrderCancel = ({
  historyItems,
  historyId,
  itemIdx,
}: IUseOrderCancel) => {
  const cancelMutation = useMutation({
    mutationFn: (doc: IOrderedProduct[]) =>
      updatePurchaseHistory(doc, historyId),
    onSuccess: () => {
      console.log("주문 취소 완료");
      queryClient.invalidateQueries({ queryKey: [] });
    },
  });

  const onClickCancelOrder = () => {
    let curHistory = historyItems.slice();
    curHistory[itemIdx].orderStatus = "주문취소";

    return cancelMutation.mutateAsync(curHistory);
  };

  return { onClickCancelOrder };
};
