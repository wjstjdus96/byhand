import { useMutation } from "@tanstack/react-query";
import { deleteProduct } from "../../../api/product";
import AlertDialogBox from "../../common/AlertDialogBox";
import { Button } from "../../ui/button";

interface IAdminBoardDeleteBtn {
  productId: string;
}

const AdminBoardDeleteBtn = ({ productId }: IAdminBoardDeleteBtn) => {
  const deleteMutation = useMutation({
    mutationFn: (productId: string) => deleteProduct(productId),
  });
  const onClickDelete = (productId: string) => {
    deleteMutation.mutate(productId, {
      onSuccess: () => {
        console.log("삭제완료");
      },
    });
  };
  return (
    <AlertDialogBox
      title="정말 삭제하시겠습니까?"
      description="한번 삭제하면 복구할 수 없습니다"
      actionName="삭제"
    >
      <Button
        onClick={() => onClickDelete(productId)}
        className="p-2 h-6 text-xs font-normal"
      >
        삭제
      </Button>
    </AlertDialogBox>
  );
};

export default AdminBoardDeleteBtn;
