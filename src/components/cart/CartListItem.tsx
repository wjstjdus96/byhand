import { useChangeQuantity } from "../../hooks/useChangeQuantity";
import { IProductResData } from "../../types/product";
import { convertPriceUnit } from "../../utils/convertPriceUnit";
import QuantityInput from "../common/form/QuantityInput";
import ProductBoardItem from "../common/productBoard/ProductBoardItem";

interface ICartListItem {
  product: IProductResData;
  selectedCnt: number;
}

const CartListItem = ({ product, selectedCnt }: ICartListItem) => {
  const {
    selectedQuantity,
    onClickMinus,
    onClickPlus,
    isMinusDisabled,
    isPlusDisabled,
  } = useChangeQuantity({
    maxQuantity: product.productQuantity,
    initialCnt: selectedCnt,
  });
  let itemTotalPrice = selectedQuantity * product.productPrice;

  return (
    <ProductBoardItem item={product}>
      <div className="flex flex-col gap-2 items-end">
        <QuantityInput
          selectedQuantity={selectedQuantity}
          onClickMinus={onClickMinus}
          onClickPlus={onClickPlus}
          isMinusDisabled={isMinusDisabled}
          isPlusDisabled={isPlusDisabled}
          size="small"
        />
        <p className="text-xs">총 합계: {convertPriceUnit(itemTotalPrice)}원</p>
      </div>
    </ProductBoardItem>
  );
};

export default CartListItem;
