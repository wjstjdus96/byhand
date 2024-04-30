import { useMutation } from "@tanstack/react-query";
import { IProductEditReqData, IProductFormData } from "../../types/product";
import { updateProduct } from "../../api/product";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { getImageUrl } from "../../api/image";
import { editReq } from "../../utils/dataSchema";
import { toast } from "../../components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { getSessionItem } from "../../utils/handleSession";

export const useEditHandler = ({
  editedProductId,
}: {
  editedProductId: string;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const editMutation = useMutation({
    mutationFn: (doc: IProductEditReqData) =>
      updateProduct(editedProductId!, doc),
  });

  const onEditHandler: SubmitHandler<IProductFormData> = async (data) => {
    setIsLoading(true);

    const imageUrl = await getImageUrl(data.productImage);
    const doc = editReq(data, imageUrl);

    editMutation.mutate(doc, {
      onSuccess: () => {
        setIsLoading(false);
        toast({
          description: "상품이 정상적으로 수정되었습니다",
        });
        navigate(`/admin/${getSessionItem("userId")}`);
      },
    });
  };

  return { onEditHandler, isLoading };
};
