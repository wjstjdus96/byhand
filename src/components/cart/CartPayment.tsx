import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

interface ICartPayment {
  checkedNum: number;
  checkedTotalPrice: string;
}

const CartPayment = ({ checkedNum, checkedTotalPrice }: ICartPayment) => {
  return (
    <div className=" border-solid border-2 border-[#2c208c] rounded-md p-6 flex flex-col gap-5">
      <h4 className="font-semibold">주문 예상 금액</h4>
      <Separator />
      <div className="flex justify-between">
        <p>총 {checkedNum}건 주문금액</p>
        <p>{checkedTotalPrice}원</p>
      </div>
      <Button>구매하기</Button>
    </div>
  );
};

export default CartPayment;
