import { usePaymentRedirect } from "../../hooks/payment/usePaymentRedirect";
import { ICheckedItem } from "../../hooks/useCheckboxSelection";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

interface ICartPayment {
  checkedItems: ICheckedItem[];
  checkedTotalPrice: string;
}

const CartPayment = ({ checkedItems, checkedTotalPrice }: ICartPayment) => {
  const { onClickPurchase } = usePaymentRedirect({ itemsToBuy: checkedItems });

  return (
    <div className=" border-solid border-2 border-[#2c208c] rounded-md p-6 flex flex-col gap-5">
      <h4 className="font-semibold">주문 예상 금액</h4>
      <Separator />
      <div className="flex justify-between">
        <p>총 {checkedItems.length}건 주문금액</p>
        <p>{checkedTotalPrice}원</p>
      </div>
      <Button onClick={onClickPurchase}>구매하기</Button>
    </div>
  );
};

export default CartPayment;
