import { Checkbox } from "../../ui/checkbox";

const ProductBoardHead = () => {
  return (
    <div className="flex items-center justify-between mb-2">
      <Checkbox />
      <div className="text-sm self-start pl-5 mr-auto">전체선택</div>
      <div className="text-sm self-start">선택삭제</div>
    </div>
  );
};

export default ProductBoardHead;
