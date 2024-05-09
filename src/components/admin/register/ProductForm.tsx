import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { getOneProduct } from "../../../api/product";
import { CATEGORY_TYPE } from "../../../consts/data";
import { IProductFormData } from "../../../types/product";
import { productRegisterSchema } from "../../../utils/validationSchema";
import Loading from "../../common/Loading";
import ImageInput from "../../common/form/ImageInput";
import SelectInput from "../../common/form/SelectInput";
import TextArea from "../../common/form/TextArea";
import { TextInput } from "../../common/form/TextInput";
import { Button } from "../../ui/button";

interface IProductForm {
  buttonName: string;
  onSubmitHandler: SubmitHandler<IProductFormData>;
  editedProductId?: string;
  isSubmitLoading: boolean;
}

const ProductForm = ({
  buttonName,
  onSubmitHandler,
  editedProductId,
  isSubmitLoading,
}: IProductForm) => {
  const [originalImages, setOriginalImages] = useState<(Blob | string)[]>([]);
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<IProductFormData>({
    resolver: zodResolver(productRegisterSchema),
  });

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

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="flex flex-col gap-6"
    >
      <SelectInput
        name="productCategory"
        label="상품 카테고리"
        control={control}
        placeholder="선택"
        items={CATEGORY_TYPE}
        errorMsg={errors.productCategory?.message}
      />
      <TextInput
        name="productName"
        label="상품 이름"
        register={register}
        errorMsg={errors.productName?.message}
      />
      <ImageInput
        name="productImage"
        label="상품이미지"
        setValue={setValue}
        originalImages={originalImages}
        setOriginalImages={setOriginalImages}
        errorMsg={errors.productImage?.message}
      />

      <div className="grid grid-cols-2 gap-3">
        <TextInput
          name="productPrice"
          label="상품 가격"
          type="number"
          placeholder="숫자만 입력가능합니다"
          register={register}
          errorMsg={errors.productPrice?.message}
        />
        <TextInput
          name="productQuantity"
          label="상품 수량"
          type="number"
          placeholder="숫자만 입력가능합니다"
          register={register}
          errorMsg={errors.productQuantity?.message}
        />
      </div>
      <TextArea
        name="productDescription"
        label="상품 설명"
        register={register}
        errorMsg={errors.productDescription?.message}
      />
      <Button type="submit">{buttonName}</Button>
      {isSubmitLoading && <Loading />}
    </form>
  );
};

export default ProductForm;
