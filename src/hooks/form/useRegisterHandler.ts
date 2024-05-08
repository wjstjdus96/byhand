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
        file, // Is the file of the image which will resized.
        300, // Is the maxWidth of the resized new image.
        300, // Is the maxHeight of the resized new image.
        "WEBP", // Is the compressFormat of the resized new image.
        100, // Is the quality of the resized new image.
        0, // Is the degree of clockwise rotation to apply to uploaded image.
        (uri) => {
          resolve(uri);
        }, // Is the callBack function of the resized new image URI.
        "file", // Is the output type of the resized new image.
        200, // Is the minWidth of the resized new image.
        200 // Is the minHeight of the resized new image.
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
