import { toast } from "../../components/ui/use-toast";
import { useCartProductStore } from "../../store/cartStore";

interface IUseAddCartItem {
  cartItemId: string;
  cartItemCount: number;
  maxQuantity: number;
}

export const useAddCartItem = ({
  cartItemId,
  cartItemCount,
  maxQuantity,
}: IUseAddCartItem) => {
  const { addCartItem, findCartItem } = useCartProductStore();

  const checkIsNoting = () => {
    if (cartItemCount == 0) {
      toast({ description: "개수를 선택해주세요", duration: 700 });
      return true;
    }
    return false;
  };

  const checkIsExceedMax = (totalCount: number) => {
    if (totalCount > maxQuantity) {
      toast({
        description: "최대 수량 이상의 개수를 담을 수 없습니다",
        duration: 700,
      });
      return true;
    }
    return false;
  };

  const addCart = (cartItemCount: number) => {
    addCartItem(cartItemId, cartItemCount);
    toast({ description: "장바구니에 담겼습니다", duration: 700 });
  };

  const onClickAddItem = () => {
    if (checkIsNoting()) {
      return;
    }

    const isExistCartItem = findCartItem(cartItemId);
    if (isExistCartItem) {
      const totalCount = cartItemCount + isExistCartItem;
      if (!checkIsExceedMax(totalCount)) {
        addCart(totalCount);
      }
    } else {
      addCart(cartItemCount);
    }
  };

  return { onClickAddItem };
};
