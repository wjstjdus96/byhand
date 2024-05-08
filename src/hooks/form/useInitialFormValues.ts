import { useEffect } from "react";
import { UseFormSetValue } from "react-hook-form";
import { getOneProduct } from "../../api/product";
import { IProductFormData } from "../../types/product";

interface IUseInitialFormValues {
  editedProductId: string | undefined;
  setValue: UseFormSetValue<IProductFormData>;
  setOriginalImages: React.Dispatch<React.SetStateAction<(Blob | string)[]>>;
}

export const useInitialFormValues = ({
  setValue,
  setOriginalImages,
  editedProductId,
}: IUseInitialFormValues) => {
  useEffect(() => {
    if (editedProductId) {
      const setForm = async () => {
        const existingData = await getOneProduct(editedProductId);

        setValue("productName", existingData!.productName);
        setValue("productCategory", existingData!.productCategory);
        setValue("productPrice", existingData!.productPrice);
        setValue("productQuantity", existingData!.productQuantity);
        setValue("productDescription", existingData!.productDescription);
        setOriginalImages(existingData!.productImage);
      };
      setForm();
    }
  }, [editedProductId]);
};
