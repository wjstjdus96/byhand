import { useNavigate } from "react-router-dom";
import { ICheckedItem } from "../../../hooks/useCheckboxSelection";
import { IProductResData } from "../../../types/product";
import ProductListItem from "../../common/product/productList/ProductListItem";
import AdminBoardBtn from "./AdminBoardBtn";
import AdminBoardDeleteBtn from "./AdminBoardDeleteBtn";
import { useProductDeletion } from "../../../hooks/seller/useProductDeletion";

interface IAdminBoardItem {
  item: IProductResData;
  lastItemRef: (node?: Element | null | undefined) => void;
  handleSingleCheck: (isCheck: boolean, currentItem: ICheckedItem) => void;
  checkedItems: ICheckedItem[];
}

const AdminBoardItem = ({
  item,
  lastItemRef,
  handleSingleCheck,
  checkedItems,
}: IAdminBoardItem) => {
  const { onClickItemDelete } = useProductDeletion({});
  const navigate = useNavigate();

  const onClickPreview = () => {
    navigate(`product/${item.id}`);
  };

  const onClickEdit = () => {
    navigate(`product/${item.id}/edit`);
  };

  return (
    <ProductListItem
      item={item}
      ref={lastItemRef}
      checkHandler={handleSingleCheck}
      checkedItems={checkedItems}
    >
      <div className="flex gap-1">
        <AdminBoardBtn name="미리보기" onClickHandler={onClickPreview} />
        <AdminBoardBtn name="수정" onClickHandler={onClickEdit} />
        <AdminBoardDeleteBtn deleteHandler={() => onClickItemDelete(item.id)} />
      </div>
    </ProductListItem>
  );
};

export default AdminBoardItem;
