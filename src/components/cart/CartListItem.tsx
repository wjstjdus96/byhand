import { useEffect } from "react";
import { useChangeQuantity } from "../../hooks/useChangeQuantity";
import { ICheckedCartItem } from "../../hooks/useCheckboxSelection";
import { IProductResData } from "../../types/product";
import { convertPriceUnit } from "../../utils/convertPriceUnit";
import QuantityInput from "../common/form/QuantityInput";
import ProductBoardItem from "../common/productBoard/ProductBoardItem";

interface ICartListItem {
  product: IProductResData;
  selectedCnt: number;
  singleCheckHandler: (isCheck: boolean, currentItem: ICheckedCartItem) => void;
  checkedItems: ICheckedCartItem[];
}

const CartListItem = ({
  product,
  selectedCnt,
  singleCheckHandler,
  checkedItems,
}: ICartListItem) => {
  const {
    selectedQuantity,
    onClickMinus,
    onClickPlus,
    isMinusDisabled,
    isPlusDisabled,
  } = useChangeQuantity({
    maxQuantity: product.productQuantity,
    initialCnt: selectedCnt,
    cartItemId: product.id,
  });
  let itemTotalPrice = selectedQuantity * product.productPrice;

  useEffect(() => {
    //전체 총액 구하기
  }, [checkedItems, selectedCnt]);

  return (
    <ProductBoardItem
      item={product}
      checkHandler={singleCheckHandler}
      checkedItems={checkedItems}
      selectedCnt={selectedCnt}
    >
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
