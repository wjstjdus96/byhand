import { useNavigate } from "react-router-dom";
import { getSessionItem } from "../../utils/handleSession";
import { useCartStore } from "../../store/cartStore";
import { ICheckedItem } from "../useCheckboxSelection";

export interface IItemsToBuy {
  itemId: string;
  itemCount: number;
}

interface IUsePaymentRedirect {
  itemsToBuy: ICheckedItem[] | IItemsToBuy[];
  totalPrice: number;
  isCartItems: boolean;
}

export const usePaymentRedirect = ({
  itemsToBuy,
  totalPrice,
  isCartItems,
}: IUsePaymentRedirect) => {
  const { closeCart } = useCartStore();
  const userId = getSessionItem("userId");
  const navigate = useNavigate();
  const onClickPurchase = () => {
    if (itemsToBuy.length == 0) {
      alert("구매할 상품이 없습니다");
      return;
    }
    navigate(`/payment/${userId}`, {
      state: { orderedItems: itemsToBuy, totalPrice, isCartItems },
    });
    closeCart();
  };

  return { onClickPurchase };
};
