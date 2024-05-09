import AdminBoardEditBtn from "./AdminBoardEditBtn";
import ProductListItem from "../../common/product/productList/ProductListItem";
import AdminBoardDeleteBtn from "./AdminBoardDeleteBtn";
import { IProductResData } from "../../../types/product";
import { ICheckedItem } from "../../../hooks/useCheckboxSelection";

interface IAdminBoardItem {
  item: IProductResData;
  lastItemRef: (node?: Element | null | undefined) => void;
  handleSingleCheck: (isCheck: boolean, currentItem: ICheckedItem) => void;
  checkedItems: ICheckedItem[];
  handleItemDelete: (productId: string) => void;
}

const AdminBoardItem = ({
  item,
  lastItemRef,
  handleSingleCheck,
  checkedItems,
  handleItemDelete,
}: IAdminBoardItem) => {
  return (
    <ProductListItem
      item={item}
      ref={lastItemRef}
      checkHandler={handleSingleCheck}
      checkedItems={checkedItems}
    >
      <div className="flex gap-1">
        <AdminBoardEditBtn productId={item.id} />
        <AdminBoardDeleteBtn deleteHandler={() => handleItemDelete(item.id)} />
      </div>
    </ProductListItem>
  );
};

export default AdminBoardItem;
