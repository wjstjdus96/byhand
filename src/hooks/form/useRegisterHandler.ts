import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IProductFormData, IProductRegisterReqData } from "../../types/product";
import { registerProduct } from "../../api/product";
import { SubmitHandler } from "react-hook-form";
import { getImageUrl } from "../../api/image";
import { registerReq } from "../../utils/dataSchema";
import { toast } from "../../components/ui/use-toast";
import { getSessionItem } from "../../utils/handleSession";

export const useRegisterHandler = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const registerMutation = useMutation({
    mutationFn: (doc: IProductRegisterReqData) => registerProduct(doc),
  });

  const onRegisterHandler: SubmitHandler<IProductFormData> = async (data) => {
    setIsLoading(true);

    const imageUrl = await getImageUrl(data.productImage);
    const doc = registerReq(data, imageUrl);

    registerMutation.mutate(doc, {
      onSuccess: () => {
        setIsLoading(false);
        toast({
          description: "상품이 정상적으로 등록되었습니다",
        });
        navigate(`/admin/${getSessionItem("userId")}`);
      },
    });
  };

  return { onRegisterHandler, isLoading };
};
