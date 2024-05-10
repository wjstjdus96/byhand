import { ICheckedItem } from "../../../../hooks/useCheckboxSelection";
import { Checkbox } from "../../../ui/checkbox";
import AlertDialogBox from "../../AlertDialogBox";

interface IProductListHead {
  totLength?: number;
  size: "small" | "medium";
  allCheckHandler: (isCheck: boolean) => void;
  checkedItems: ICheckedItem[];
  deleteCheckedItemsHandler: () => void;
}

const ProductListHead = ({
  totLength,
  size = "medium",
  allCheckHandler,
  checkedItems,
  deleteCheckedItemsHandler,
}: IProductListHead) => {
  const paddingSize = {
    small: "p-2  mb-1",
    medium: "p-0  mb-2",
  }[size];

  return (
    <div className={`flex items-center justify-between ${paddingSize}`}>
      <Checkbox
        onCheckedChange={allCheckHandler}
        checked={checkedItems.length == totLength}
      />
      {totLength && (
        <div className="text-sm self-start pl-5 mr-auto">
          전체선택 ({checkedItems.length}/{totLength})
        </div>
      )}
      <AlertDialogBox
        title="선택하신 상품을 모두 삭제하시겠습니까?"
        description="한번 삭제하면 복구할 수 없습니다"
        actionName="삭제"
        onClickAction={deleteCheckedItemsHandler}
      >
        <div className="text-sm self-start cursor-pointer">선택삭제</div>
      </AlertDialogBox>
    </div>
  );
};

export default ProductListHead;