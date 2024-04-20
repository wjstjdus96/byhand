import AdminBoardDeleteBtn from "../../admin/board/AdminBoardDeleteBtn";
import AdminBoardEditBtn from "../../admin/board/AdminBoardEditBtn";
import { Checkbox } from "../../ui/checkbox";

interface IProductBoardItem {
  item: any;
  isSellerPage: boolean;
}

const ProductBoardItem = ({ item, isSellerPage }: IProductBoardItem) => {
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
          <p className="text-xs">남은수량: {item.productQuantity}개</p>
          {isSellerPage && (
            <div className="flex gap-1">
              <AdminBoardEditBtn productId={item.id} />
              <AdminBoardDeleteBtn productId={item.id} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductBoardItem;
