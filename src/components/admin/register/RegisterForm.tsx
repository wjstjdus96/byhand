import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { serverTimestamp } from "firebase/firestore";
import { getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { uploadProductImage } from "../../../api/image";
import {
  getOneProduct,
  registerProduct,
  updateProduct,
} from "../../../api/product";
import { getSessionItem } from "../../../utils/handleSession";
import { productRegisterSchema } from "../../../utils/schema";
import TextArea from "../../common/TextArea";
import { TextInput } from "../../common/TextInput";
import { Button } from "../../ui/button";
import { useToast } from "../../ui/use-toast";
import ImageInput from "./ImageInput";

interface IRegisterFormData {
  productImage: any[];
  productName: string;
  productCategory: string;
  productPrice: number;
  productQuantity: number;
  productDescription: string;
}

export interface IProductData {
  productImage: string[];
  productName: string;
  productCategory: string;
  productPrice: number;
  productQuantity: number;
  productDescription: string;
  sellerId?: string;
  createdAt?: any;
  updatedAt: any;
}

interface IRegisterForm {
  isEdit?: string;
}

const RegisterForm = ({ isEdit }: IRegisterForm) => {
  const [isLoading, setIsLoading] = useState(false);
  const [originalImages, setOriginalImages] = useState<any[]>([]);
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<IRegisterFormData>({
    resolver: zodResolver(productRegisterSchema),
  });
  const navigate = useNavigate();
  const { toast } = useToast();
  const registerMutation = useMutation({
    mutationFn: (doc: IProductData) => registerProduct({ req: doc }),
  });
  const editMutation = useMutation({
    mutationFn: (doc: IProductData) => updateProduct(isEdit!, doc),
  });

  const onRegisterHandler: SubmitHandler<IRegisterFormData> = async (data) => {
    const imageArray: string[] = [];
    setIsLoading(true);

    for (const image of data.productImage) {
      const snapshot = await uploadProductImage(image, image.name);
      const downloadUrl = await getDownloadURL(snapshot.ref);
      imageArray.push(downloadUrl);
    }

    const doc: IProductData = {
      sellerId: getSessionItem("userId")!,
      productImage: imageArray,
      productName: data.productName,
      productCategory: data.productCategory,
      productPrice: data.productPrice,
      productQuantity: data.productQuantity,
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
        navigate(`/admin/${getSessionItem("userId")}`);
      },
    });
  };

  const onEditHandler: SubmitHandler<IRegisterFormData> = async (data) => {
    const imageArray: string[] = [];
    setIsLoading(true);

    for (const image of data.productImage) {
      if (typeof image != "string") {
        const snapshot = await uploadProductImage(image, image.name);
        const downloadUrl = await getDownloadURL(snapshot.ref);
        imageArray.push(downloadUrl);
      } else {
        imageArray.push(image);
      }
    }

    const doc: IProductData = {
      productImage: imageArray,
      productName: data.productName,
      productCategory: data.productCategory,
      productPrice: data.productPrice,
      productQuantity: data.productQuantity,
      productDescription: data.productDescription,
      updatedAt: serverTimestamp(),
    };

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

  useEffect(() => {
    if (isEdit) {
      const setForm = async () => {
        const existingData = await getOneProduct(isEdit);

        setValue("productName", existingData!.productName);
        setValue("productCategory", existingData!.productCategory);
        setValue("productPrice", existingData!.productPrice);
        setValue("productQuantity", existingData!.productQuantity);
        setValue("productDescription", existingData!.productDescription);
        setOriginalImages(existingData!.productImage);
      };
      setForm();
    }
  }, [isEdit]);

  return (
    <form
      onSubmit={
        isEdit ? handleSubmit(onEditHandler) : handleSubmit(onRegisterHandler)
      }
      className="flex flex-col gap-6"
    >
      <ImageInput
        name="productImage"
        label="상품이미지"
        setValue={setValue}
        originalImages={originalImages}
        setOriginalImages={setOriginalImages}
        errorMsg={errors.productImage?.message}
      />
      <TextInput
        name="productName"
        label="상품 이름"
        register={register}
        errorMsg={errors.productName?.message}
      />
      <TextInput
        name="productCategory"
        label="상품 카테고리"
        register={register}
        errorMsg={errors.productCategory?.message}
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
      <Button type="submit">{isEdit ? "수정" : "등록"}</Button>
      {isLoading && <div>로딩중~~</div>}
    </form>
  );
};

export default RegisterForm;
