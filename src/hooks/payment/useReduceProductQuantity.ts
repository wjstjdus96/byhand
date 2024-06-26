import { useMutation } from "@tanstack/react-query";
import { updateProductsQuantity } from "../../api/product";
import { queryClient } from "../../App";
import { IOrderItem } from "../../types/order";

export const useReduceProductQuantity = ({
  orderedItems,
}: {
  orderedItems: IOrderItem[];
}) => {
  const updateMutation = useMutation({
    mutationFn: (doc: IOrderItem[]) => updateProductsQuantity(doc),
    onSuccess: () => {
      console.log("수량 감소 완료");
      orderedItems.forEach((item) => {
        queryClient.invalidateQueries({ queryKey: ["product", item.itemId] });
      });
    },
  });

  const reduceProductsQuantity = async ({
    orderedItems,
  }: {
    orderedItems: IOrderItem[];
  }) => {
    return updateMutation.mutateAsync(orderedItems);
  };

  return { reduceProductsQuantity };
};
