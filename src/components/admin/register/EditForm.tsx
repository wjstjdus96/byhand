import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getImageUrl } from "../../../api/image";
import { updateProduct } from "../../../api/product";
import { editReq } from "../../../utils/dataSchema";
import { getSessionItem } from "../../../utils/handleSession";
import { toast } from "../../ui/use-toast";
import ProductForm from "./ProductForm";
import { IProductEditReqData, IProductFormData } from "../../../types/product";

const EditForm = ({ isEdit }: { isEdit: string }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const editMutation = useMutation({
    mutationFn: (doc: IProductEditReqData) => updateProduct(isEdit!, doc),
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

  return (
    <ProductForm
      buttonName="수정"
      onSubmitHandler={onEditHandler}
      isEdit={isEdit}
      isSubmitLoading={isLoading}
    />
  );
};

export default EditForm;
