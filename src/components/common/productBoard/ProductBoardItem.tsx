import { forwardRef } from "react";
import { ICheckedItem } from "../../../hooks/useCheckboxSelection";
import { convertPriceUnit } from "../../../utils/convertPriceUnit";
import { Checkbox } from "../../ui/checkbox";

interface IProductBoardItem {
  item: any;
  children: React.ReactNode;
  checkHandler: (isCheck: boolean, currentItem: ICheckedItem) => void;
  checkedItems: ICheckedItem[];
  selectedCnt?: number;
  isCart?: boolean;
}

const ProductBoardItem = forwardRef<HTMLDivElement, IProductBoardItem>(
  (
    { item, children, checkHandler, checkedItems, selectedCnt, isCart },
    ref
  ) => {
    return (
      <div
        className={`flex h-28  py-2 ${isCart ? "gap-2" : "gap-5"}`}
        ref={ref}
      >
        <Checkbox
          onCheckedChange={(checked) => {
            checkHandler(
              checked,
              selectedCnt
                ? { itemId: item.id, itemCount: selectedCnt }
                : { itemId: item.id }
            );
          }}
          checked={checkedItems.map((el) => el.itemId).includes(item.id)}
        />
        <img
          src={item.productImage[0]}
          className="object-cover w-24 rounded-sm"
        />
        <div className="flex flex-col justify-between w-full py-1">
          <span className={`${isCart ? "text-sm" : "text-md"}`}>
            {item.productName}
          </span>
          <span className={`${isCart ? "text-xs" : "text-sm"}`}>
            {convertPriceUnit(item.productPrice)}원
          </span>
          <div className="flex items-end justify-between">
            <p className="text-xs">남은수량: {item.productQuantity}개</p>
            {children}
          </div>
        </div>
      </div>
    );
  }
);

export default ProductBoardItem;
