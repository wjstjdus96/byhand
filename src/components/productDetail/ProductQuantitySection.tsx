import { useParams } from "react-router-dom";
import { useCartAddProduct } from "../../hooks/productDetail.tsx/useCartAddProduct";
import { useProductPrice } from "../../hooks/productDetail.tsx/useProductPrice";
import { useQuantitySelection } from "../../hooks/useQuantitySelection";
import { convertPriceUnit } from "../../utils/convertPriceUnit";
import QuantityInput from "../common/form/QuantityInput";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { usePaymentRedirect } from "../../hooks/payment/usePaymentRedirect";
import React from "react";

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
  } = useQuantitySelection({
    maxQuantity: quantity,
    initialCnt: 0,
  });
  const { productId } = useParams();
  const { onClickAddItem } = useCartAddProduct({
    cartItemId: productId!,
    cartItemCount: selectedQuantity,
    maxQuantity: quantity,
  });
  const { totalPrice } = useProductPrice({ selectedQuantity, price });
  const { onClickPurchase } = usePaymentRedirect({
    itemsToBuy: [{ itemId: productId!, itemCount: selectedQuantity }],
    totalPrice,
    isCartItems: false,
  });

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
        <Button onClick={onClickPurchase}>구매하기</Button>
      </div>
    </div>
  );
};

export default React.memo(ProductQuantitySection);
