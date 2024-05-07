import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/userStore";
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
  const { user } = useUserStore();
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
    navigate(`/payment/${user?.uid}`, {
      state: { orderedItems: itemsToBuy, totalPrice, isCartItems },
    });
  };

  return { onClickPurchase };
};
