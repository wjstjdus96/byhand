import { useNavigate } from "react-router-dom";
import { useProductDeletion } from "../../../hooks/seller/useProductDeletion";
import { ICheckedItem } from "../../../hooks/useCheckboxSelection";
import { IProductResData } from "../../../types/product";
import ListItem from "../../common/product/productList/ProductListItem";
import AdminBoardBtn from "./AdminBoardBtn";
import AdminBoardDeleteBtn from "./AdminBoardDeleteBtn";

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
    <ListItem.Root
      item={item}
      checkHandler={handleSingleCheck}
      checkedItems={checkedItems}
      lastItemRef={lastItemRef}
      gapSize="5"
    >
      <ListItem.CheckBox />
      <ListItem.Image size="28" />
      <div className="flex flex-col gap-1 justify-between w-full py-1">
        <ListItem.Name />
        <ListItem.Price className="text-sm" />
        <div className="flex items-end justify-between">
          <ListItem.LeftQuantity className="text-xs" />
          <div className="flex gap-1">
            <AdminBoardBtn name="미리보기" onClickHandler={onClickPreview} />
            <AdminBoardBtn name="수정" onClickHandler={onClickEdit} />
            <AdminBoardDeleteBtn
              deleteHandler={() => onClickItemDelete(item.id)}
            />
          </div>
        </div>
      </div>
    </ListItem.Root>
  );
};

export default AdminBoardItem;
