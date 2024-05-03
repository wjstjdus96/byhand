import { queryClient } from "../../App";
import { useCartProductStore } from "../../store/cartStore";
import { getSessionItem } from "../../utils/handleSession";

interface IOrderItems {
  itemCount: number;
  itemId: string;
}

export const useCartDeletion = () => {
  const userId = getSessionItem("userId");
  const { deleteCartItem } = useCartProductStore();
  const deleteCartItems = async (orderedCartItems: IOrderItems[]) => {
    orderedCartItems.forEach((item) => {
      deleteCartItem(item.itemId);
    });
    queryClient.invalidateQueries({ queryKey: ["cart", userId] });
    console.log("장바구니 삭제 완료");
  };

  return { deleteCartItems };
};
