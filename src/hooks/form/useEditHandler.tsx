import { useMutation } from "@tanstack/react-query";
import { serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getImagesUrl } from "../../api/image";
import { updateProduct } from "../../api/product";
import { toast } from "../../components/ui/use-toast";
import { useUserStore } from "../../store/userStore";
import { IProductEditReqData, IProductFormData } from "../../types/product";

export const useEditHandler = ({
  editedProductId,
}: {
  editedProductId: string;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useUserStore();
  const editMutation = useMutation({
    mutationFn: (doc: IProductEditReqData) =>
      updateProduct(editedProductId!, doc),
  });

  const onEditHandler: SubmitHandler<IProductFormData> = async (data) => {
    setIsLoading(true);

    const imageUrl = await getImagesUrl(data.productImage);

    const doc = {
      productImage: imageUrl,
      productName: data.productName,
      productCategory: data.productCategory,
      productPrice: Number(data.productPrice),
      productQuantity: Number(data.productQuantity),
      productDescription: data.productDescription,
      updatedAt: serverTimestamp(),
    };

    editMutation.mutate(doc, {
      onSuccess: () => {
        setIsLoading(false);
        toast({
          description: "상품이 정상적으로 수정되었습니다",
        });
        navigate(`/admin/${user?.uid}`);
      },
    });
  };

  return { onEditHandler, isLoading };
};
