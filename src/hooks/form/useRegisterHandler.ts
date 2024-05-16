import { useMutation } from "@tanstack/react-query";
import { serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getImageUrl, getImagesUrl } from "../../api/image";
import { registerProduct } from "../../api/product";
import { toast } from "../../components/ui/use-toast";
import { useUserStore } from "../../store/userStore";
import { IProductFormData, IProductRegisterReqData } from "../../types/product";
import Resizer from "react-image-file-resizer";

export const useRegisterHandler = () => {
  const { user } = useUserStore();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const registerMutation = useMutation({
    mutationFn: (doc: IProductRegisterReqData) => registerProduct(doc),
  });

  const resizeFile = (file: File) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        300,
        300,
        "WEBP",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "file",
        200,
        200
      );
    });

  const onRegisterHandler: SubmitHandler<IProductFormData> = async (data) => {
    setIsLoading(true);

    const thumbnail = (await resizeFile(data.productImage[0])) as File;
    const thumbnailUrl = await getImageUrl(thumbnail);
    const imageUrl = await getImagesUrl(data.productImage);

    const doc = {
      sellerId: user?.uid!,
      productThumbnail: thumbnailUrl,
      productImage: imageUrl,
      productName: data.productName,
      productCategory: data.productCategory,
      productPrice: Number(data.productPrice),
      productQuantity: Number(data.productQuantity),
      productDescription: data.productDescription,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    registerMutation.mutate(doc, {
      onSuccess: () => {
        setIsLoading(false);
        toast({
          description: "상품이 정상적으로 등록되었습니다",
        });
        navigate(`/admin/${user?.uid}`);
      },
    });
  };

  return { onRegisterHandler, isLoading };
};
