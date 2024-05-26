import { useParams } from "react-router-dom";
import { useAddCartItem } from "../../hooks/productDetail/useAddCartItem";
import { useProductPrice } from "../../hooks/productDetail/useProductPrice";
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
  const { selectedQuantity, quantityHandler } = useQuantitySelection({
    maxQuantity: quantity,
    initialCnt: 0,
  });
  const { productId } = useParams();
  const { onClickAddItem } = useAddCartItem({
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
    <>
      <div className="flex flex-col w-full items-end gap-5">
        <p className="text-sm text-slate-600">
          남은수량: <span className="font-bold">{quantity}</span>개
        </p>
        <QuantityInput
          selectedQuantity={selectedQuantity}
          quantityHandler={quantityHandler}
          size="medium"
        />
        <Separator />
        <div className="flex justify-between items-center w-full">
          <p className="font-semibold">총 상품 금액</p>
          <div className="flex items-center gap-1">
            <p>
              총 수량 <span className="font-semibold">{selectedQuantity}</span>{" "}
              개
            </p>
            <span>｜</span>
            <p className="flex items-center gap-1">
              <span className="text-2xl text-[#312fd0] font-semibold">
                {convertPriceUnit(totalPrice)}{" "}
              </span>
              <span className="text-sm"> 원</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 self-end">
        <Button onClick={onClickAddItem}>장바구니에 담기</Button>
        <Button onClick={onClickPurchase}>구매하기</Button>
      </div>
    </>
  );
};

export default React.memo(ProductQuantitySection);
