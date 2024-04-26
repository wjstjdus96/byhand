import { forwardRef } from "react";
import { convertPriceUnit } from "../../../utils/convertPriceUnit";
import { Checkbox } from "../../ui/checkbox";

interface IProductBoardItem {
  item: any;
  children: React.ReactNode;
}

const ProductBoardItem = forwardRef<HTMLDivElement, IProductBoardItem>(
  ({ item, children }, ref) => {
    return (
      <div className="flex h-28 gap-5 py-2" ref={ref}>
        <Checkbox />
        <img
          src={item.productImage[0]}
          className="object-cover w-24 rounded-sm"
        />
        <div className="flex flex-col justify-between w-full py-1">
          <span>{item.productName}</span>
          <span className="text-sm">
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
