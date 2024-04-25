import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getImageUrl } from "../../../api/image";
import { registerProduct } from "../../../api/product";
import { registerReq } from "../../../utils/dataSchema";
import { getSessionItem } from "../../../utils/handleSession";
import { toast } from "../../ui/use-toast";
import ProductForm from "./ProductForm";
import {
  IProductFormData,
  IProductRegisterReqData,
} from "../../../types/product";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const registerMutation = useMutation({
    mutationFn: (doc: IProductRegisterReqData) => registerProduct({ req: doc }),
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

  return (
    <ProductForm
      buttonName="등록"
      onSubmitHandler={onRegisterHandler}
      isSubmitLoading={isLoading}
    />
  );
};

export default RegisterForm;
