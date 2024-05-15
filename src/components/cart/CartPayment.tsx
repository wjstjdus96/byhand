import { usePaymentRedirect } from "../../hooks/payment/usePaymentRedirect";
import { ICheckedItem } from "../../hooks/useCheckboxSelection";
import { convertPriceUnit } from "../../utils/convertPriceUnit";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

interface ICartPayment {
  checkedItems: ICheckedItem[];
  checkedTotalPrice: number;
}

const CartPayment = ({ checkedItems, checkedTotalPrice }: ICartPayment) => {
  const { onClickPurchase } = usePaymentRedirect({
    itemsToBuy: checkedItems,
    totalPrice: checkedTotalPrice,
    isCartItems: true,
  });

  return (
    <div className=" border-solid border-[1px] border-[#2c208c] rounded-md p-6 flex flex-col gap-4">
      <h4 className="font-semibold">주문 예상 금액</h4>
      <Separator />
      <div className="flex justify-between items-center mb-3">
        <p className="text-sm">총 {checkedItems.length}건 주문금액</p>
        <p>
          <span className="font-bold mr-1 text-[#2c208c]">
            {convertPriceUnit(checkedTotalPrice)}
          </span>
          원
        </p>
      </div>
      <div>
        <Button
          className="bg-[#2c208c] hover:bg-[#271248] w-full"
          onClick={onClickPurchase}
        >
          구매하기
        </Button>
        <p className="text-center text-xs mt-2 text-slate-500">
          배송비 2500원은 별도입니다
        </p>
      </div>
    </div>
  );
};

export default CartPayment;
