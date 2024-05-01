import { useMutation } from "@tanstack/react-query";
import { deleteProduct } from "../../api/product";
import { toast } from "../../components/ui/use-toast";
import { getSessionItem } from "../../utils/handleSession";
import { queryClient } from "../../App";
import { ICheckedItem } from "../useCheckboxSelection";

export const useProductDeletion = ({
  handleInitItems,
}: {
  handleInitItems: () => void;
}) => {
  const uid = getSessionItem("userId");
  const deleteMutation = useMutation({
    mutationFn: (productId: string) => deleteProduct(productId),
  });

  const onClickItemDelete = (productId: string) => {
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

  const onClickCheckedItemsDelte = async (checkedItems: ICheckedItem[]) => {
    const deletePromise = checkedItems.map((item) =>
      deleteMutation.mutateAsync(item.itemId)
    );
    await Promise.all(deletePromise);

    if (uid) queryClient.invalidateQueries({ queryKey: ["sellProduct", uid] });
    handleInitItems();
    toast({ description: "선택하신 상품이 정상적으로 삭제되었습니다" });
  };

  return { onClickItemDelete, onClickCheckedItemsDelte };
};
