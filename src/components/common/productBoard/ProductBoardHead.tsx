import { Checkbox } from "../../ui/checkbox";
import AlertDialogBox from "../AlertDialogBox";

interface IProductBoardHead {
  totLength?: number;
  selectedLength?: number;
  size: "small" | "medium";
  allCheckHandler: (isCheck: boolean) => void;
  checkedLength: number;
}

const ProductBoardHead = ({
  totLength,
  size = "medium",
  allCheckHandler,
  checkedLength,
}: IProductBoardHead) => {
  const paddingSize = {
    small: "p-2",
    medium: "p-0",
  }[size];

  const onClickDelete = () => {};

  return (
    <div className={`flex items-center justify-between mb-2 ${paddingSize}`}>
      <Checkbox
        onCheckedChange={allCheckHandler}
        checked={checkedLength == totLength}
      />
      {totLength && (
        <div className="text-sm self-start pl-5 mr-auto">
          전체선택 ({checkedLength}/{totLength})
        </div>
      )}
      <AlertDialogBox
        title="선택하신 상품을 모두 삭제하시겠습니까?"
        description="한번 삭제하면 복구할 수 없습니다"
        actionName="삭제"
        onClickAction={onClickDelete}
      >
        <div className="text-sm self-start cursor-pointer">선택삭제</div>
      </AlertDialogBox>
    </div>
  );
};

export default ProductBoardHead;
