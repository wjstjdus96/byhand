import { useQuantitySelection } from "../../hooks/useQuantitySelection";
import { ICheckedItem } from "../../hooks/useCheckboxSelection";
import { IProductResData } from "../../types/product";
import { convertPriceUnit } from "../../utils/convertPriceUnit";
import QuantityInput from "../common/form/QuantityInput";
import ListItem from "../common/product/productList/ProductListItem";

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
  const { selectedQuantity, quantityHandler } = useQuantitySelection({
    maxQuantity: product.productQuantity,
    initialCnt: selectedCnt,
    cartItemId: product.id,
  });
  let itemTotalPrice = selectedQuantity * product.productPrice;

  return (
    <ListItem.Root
      item={product}
      checkHandler={singleCheckHandler}
      checkedItems={checkedItems}
      selectedCnt={selectedCnt}
      gapSize="2"
    >
      <ListItem.CheckBox />
      <ListItem.Image size="32" />
      <div className="flex flex-col gap-1 justify-between w-full py-1">
        <ListItem.Name className="text-sm" />
        <span className="flex gap-3 items-center">
          <ListItem.Price className="text-[10px]" />
          <ListItem.LeftQuantity className="text-[10px]" />
        </span>
        <div className="flex gap-1 justify-between items-center">
          <QuantityInput
            selectedQuantity={selectedQuantity}
            quantityHandler={quantityHandler}
            size="small"
          />
          <p className="text-xs">
            총 합계: {convertPriceUnit(itemTotalPrice)}원
          </p>
        </div>
      </div>
    </ListItem.Root>
  );
};

export default CartListItem;
