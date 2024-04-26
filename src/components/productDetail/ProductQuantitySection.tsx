import { useEffect, useState } from "react";
import { useChangeQuantity } from "../../hooks/useChangeQuantity";
import QuantityInput from "../common/form/QuantityInput";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { convertPriceUnit } from "../../utils/convertPriceUnit";
import { useParams } from "react-router-dom";
import { useCartAddProduct } from "../../hooks/cart/useCartAddProduct";

interface IProductQuantitySection {
  quantity: number;
  price: number;
}

const ProductQuantitySection = ({
  quantity,
  price,
}: IProductQuantitySection) => {
  const {
    selectedQuantity,
    onClickMinus,
    onClickPlus,
    isMinusDisabled,
    isPlusDisabled,
  } = useChangeQuantity({
    maxQuantity: quantity,
  });
  const { productId } = useParams();
  const { onClickAddItem } = useCartAddProduct({
    cartItemId: productId!,
    cartItemCount: selectedQuantity,
    maxQuantity: quantity,
  });
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const tot = selectedQuantity * price;
    setTotalPrice(tot);
  }, [selectedQuantity]);

  return (
    <div className="flex flex-col items-end gap-7">
      <p>남은수량:{quantity}개</p>
      <QuantityInput
        selectedQuantity={selectedQuantity}
        onClickMinus={onClickMinus}
        onClickPlus={onClickPlus}
        isMinusDisabled={isMinusDisabled}
        isPlusDisabled={isPlusDisabled}
        size="medium"
      />
      <Separator />
      <div className="flex justify-between items-center w-full">
        <p className="font-semibold">총 상품 금액</p>
        <div className="flex">
          <p>총 수량 {selectedQuantity}개</p>
          <span>｜</span>
          <p>{convertPriceUnit(totalPrice)}원</p>
        </div>
      </div>
      <div className="flex gap-4">
        <Button onClick={onClickAddItem}>장바구니에 담기</Button>
        <Button>구매하기</Button>
      </div>
    </div>
  );
};

export default ProductQuantitySection;
