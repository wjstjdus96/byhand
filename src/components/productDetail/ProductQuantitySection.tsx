import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import QuantityInput from "../common/form/QuantityInput";

const ProductQuantitySection = ({ quantity }: { quantity: number }) => {
  return (
    <div className="flex flex-col items-end gap-8">
      <p>남은수량:{quantity}개</p>
      <QuantityInput maxQuantity={quantity} />
      <Separator />
      <div className="flex justify-between w-full">
        <p className="font-semibold">총 상품 금액</p>
        <div className="flex">
          <p>총 수량{"1"}개</p>
          <span>｜</span>
          <p>99,011원</p>
        </div>
      </div>
      <div className="flex gap-4">
        <Button>장바구니에 담기</Button>
        <Button>구매하기</Button>
      </div>
    </div>
  );
};

export default ProductQuantitySection;
