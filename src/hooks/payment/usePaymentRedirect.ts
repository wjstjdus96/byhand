import { useNavigate } from "react-router-dom";
import { getSessionItem } from "../../utils/handleSession";
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
  const userId = getSessionItem("userId");
  const navigate = useNavigate();
  const onClickPurchase = () => {
    if (itemsToBuy.length == 0) {
      alert("구매할 상품이 없습니다");
      return;
    }
    if (itemsToBuy[0].itemCount == 0) {
      alert("수량을 선택해주세요");
      return;
    }
    navigate(`/payment/${userId}`, {
      state: { orderedItems: itemsToBuy, totalPrice, isCartItems },
    });
  };

  return { onClickPurchase };
};
