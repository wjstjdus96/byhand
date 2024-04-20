import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

interface IProductBoardItem {
  item: any;
}

const ProductBoardItem = ({ item }: IProductBoardItem) => {
  return (
    <div className="flex h-28 gap-5 py-2">
      <Checkbox />
      <img
        src={item.productImage[0]}
        className="object-cover w-24 rounded-sm"
      />
      <div className="flex flex-col justify-between w-full py-1">
        <span>{item.productName}</span>
        <div className="flex items-center justify-between">
          <p className="text-xs">남은수량: {item.productQunatity}개</p>
          <div className="flex gap-1">
            <Button className="p-2 h-6 text-xs font-normal">수정</Button>
            <Button className="p-2 h-6 text-xs font-normal">삭제</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBoardItem;
