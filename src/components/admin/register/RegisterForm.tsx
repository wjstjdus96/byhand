import { useMutation } from "@tanstack/react-query";
import { serverTimestamp } from "firebase/firestore";
import { getDownloadURL } from "firebase/storage";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { uploadProductImage } from "../../../api/image";
import { registerProduct } from "../../../api/product";
import { getSessionItem } from "../../../utils/handleSession";
import TextArea from "../../common/TextArea";
import { TextInput } from "../../common/TextInput";
import { Button } from "../../ui/button";
import { useToast } from "../../ui/use-toast";
import ImageInput from "./ImageInput";

interface IRegisterFormData {
  productImage: File[];
  productName: string;
  productCategory: string;
  productPrice: number;
  productQunatity: number;
  productDescription: string;
}

interface IProductData {
  productImage: string[];
  productName: string;
  productCategory: string;
  productPrice: number;
  productQunatity: number;
  productDescription: string;
  sellerId: string;
  createdAt: any;
  updatedAt: any;
}

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, setValue } = useForm<IRegisterFormData>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const registerMutation = useMutation({
    mutationFn: (doc: IProductData) => registerProduct({ req: doc }),
  });

  const onSubmitHandler: SubmitHandler<IRegisterFormData> = async (data) => {
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
      productQunatity: data.productQunatity,
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

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="flex flex-col gap-6"
    >
      <ImageInput name="productImage" label="상품이미지" setValue={setValue} />
      <TextInput name="productName" label="상품 이름" register={register} />
      <TextInput
        name="productCategory"
        label="상품 카테고리"
        register={register}
      />
      <div className="grid grid-cols-2 gap-3">
        <TextInput name="productPrice" label="상품 가격" register={register} />
        <TextInput
          name="productQunatity"
          label="상품 수량"
          register={register}
        />
      </div>
      <TextArea
        name="productDescription"
        label="상품 설명"
        register={register}
      />
      <Button type="submit">등록</Button>
      {isLoading && <div>로딩중~~</div>}
    </form>
  );
};

export default RegisterForm;
