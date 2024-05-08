import { queryClient } from "../../App";
import { useCartProductStore } from "../../store/cartStore";
import { useUserStore } from "../../store/userStore";

interface IOrderItems {
  itemCount: number;
  itemId: string;
}

export const useCartDeletion = () => {
  const { user } = useUserStore();
  const { deleteCartItem } = useCartProductStore();
  const deleteCartItems = async (orderedCartItems: IOrderItems[]) => {
    orderedCartItems.forEach((item) => {
      deleteCartItem(item.itemId);
    });
    queryClient.invalidateQueries({ queryKey: ["cart", user?.uid] });
    console.log("장바구니 삭제 완료");
  };

  return { deleteCartItems };
};
