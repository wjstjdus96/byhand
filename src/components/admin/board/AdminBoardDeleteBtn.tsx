import { useMutation } from "@tanstack/react-query";
import { deleteProduct } from "../../../api/product";
import AlertDialogBox from "../../common/AlertDialogBox";
import { Button } from "../../ui/button";
import { useToast } from "../../ui/use-toast";
import { queryClient } from "../../../App";
import { getSessionItem } from "../../../utils/handleSession";

interface IAdminBoardDeleteBtn {
  productId: string;
}

const AdminBoardDeleteBtn = ({ productId }: IAdminBoardDeleteBtn) => {
  const uid = getSessionItem("userId");
  const { toast } = useToast();
  const deleteMutation = useMutation({
    mutationFn: (productId: string) => deleteProduct(productId),
  });
  const onClickDelete = () => {
    deleteMutation.mutate(productId, {
      onSuccess: () => {
        toast({
          description: "상품이 정상적으로 삭제되었습니다",
        });
        if (uid)
          queryClient.invalidateQueries({ queryKey: ["sellProduct", uid] });
      },
    });
  };

  return (
    <AlertDialogBox
      title="정말 삭제하시겠습니까?"
      description="한번 삭제하면 복구할 수 없습니다"
      actionName="삭제"
      onClickAction={onClickDelete}
    >
      <Button className="p-2 h-6 text-xs font-normal">삭제</Button>
    </AlertDialogBox>
  );
};

export default AdminBoardDeleteBtn;
