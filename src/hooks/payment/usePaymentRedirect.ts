import { useNavigate } from "react-router-dom";
import { getSessionItem } from "../../utils/handleSession";
import { useCartStore } from "../../store/cartStore";
import { ICheckedItem } from "../useCheckboxSelection";

interface IItemsToBuy {
  itemId: string;
  itemCount: number;
}

interface IUsePaymentRedirect {
  itemsToBuy: ICheckedItem[] | IItemsToBuy[];
}

export const usePaymentRedirect = ({ itemsToBuy }: IUsePaymentRedirect) => {
  const { closeCart } = useCartStore();
  const userId = getSessionItem("userId");
  const navigate = useNavigate();
  const onClickPurchase = () => {
    if (itemsToBuy.length == 0) {
      alert("구매할 상품이 없습니다");
      return;
    }
    navigate(`/payment/${userId}`, { state: itemsToBuy });
    closeCart();
  };

  return { onClickPurchase };
};
