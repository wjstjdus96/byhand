import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../App";
import { deleteProduct } from "../../api/product";
import { toast } from "../../components/ui/use-toast";
import { useUserStore } from "../../store/userStore";
import { ICheckedItem } from "../useCheckboxSelection";

interface IUseProductDeletion {
  handleInitItems?: () => void | undefined;
}

export const useProductDeletion = ({
  handleInitItems,
}: IUseProductDeletion) => {
  const { user } = useUserStore();
  const deleteMutation = useMutation({
    mutationFn: (productId: string) => deleteProduct(productId),
  });

  const onClickItemDelete = (productId: string) => {
    deleteMutation.mutate(productId, {
      onSuccess: () => {
        if (user?.uid)
          queryClient.invalidateQueries({
            queryKey: ["sellProduct", user.uid],
          });
        toast({ description: "상품이 정상적으로 삭제되었습니다" });
      },
    });
  };

  const onClickCheckedItemsDelete = async (checkedItems: ICheckedItem[]) => {
    const deletePromise = checkedItems.map((item) =>
      deleteMutation.mutateAsync(item.itemId)
    );
    await Promise.all(deletePromise);

    if (user?.uid)
      queryClient.invalidateQueries({ queryKey: ["sellProduct", user.uid] });
    handleInitItems!();
    toast({ description: "선택하신 상품이 정상적으로 삭제되었습니다" });
  };

  return { onClickItemDelete, onClickCheckedItemsDelete };
};
