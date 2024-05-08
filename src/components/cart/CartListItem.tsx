import { useQuantitySelection } from "../../hooks/useQuantitySelection";
import { ICheckedItem } from "../../hooks/useCheckboxSelection";
import { IProductResData } from "../../types/product";
import { convertPriceUnit } from "../../utils/convertPriceUnit";
import QuantityInput from "../common/form/QuantityInput";
import ProductBoardItem from "../common/productBoard/ProductBoardItem";

interface ICartListItem {
  product: IProductResData;
  selectedCnt: number;
  singleCheckHandler: (isCheck: boolean, currentItem: ICheckedItem) => void;
  checkedItems: ICheckedItem[];
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
  } = useQuantitySelection({
    maxQuantity: product.productQuantity,
    initialCnt: selectedCnt,
    cartItemId: product.id,
  });
  let itemTotalPrice = selectedQuantity * product.productPrice;

  return (
    <ProductBoardItem
      item={product}
      checkHandler={singleCheckHandler}
      checkedItems={checkedItems}
      selectedCnt={selectedCnt}
      isCart={true}
    >
      <div className="flex gap-1 justify-between items-center">
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
