import { getDownloadURL } from "firebase/storage";
import { SubmitHandler, useForm } from "react-hook-form";
import { uploadProductImage } from "../../../api/image";
import { registerProduct } from "../../../api/product";
import { getSessionItem } from "../../../utils/handleSession";
import TextArea from "../../common/TextArea";
import { TextInput } from "../../common/TextInput";
import { Button } from "../../ui/button";
import ImageInput from "./ImageInput";

interface IProductData {
  productImage: File[];
  productName: string;
  productCategory: string;
  productPrice: number;
  productQunatity: number;
  productDescription: string;
}

const RegisterForm = () => {
  const { register, handleSubmit, setValue } = useForm<IProductData>();

  const onSubmitHandler: SubmitHandler<IProductData> = async (data) => {
    const imageArray: string[] = [];

    for (const image of data.productImage) {
      const snapshot = await uploadProductImage(image, image.name);
      const downloadUrl = await getDownloadURL(snapshot.ref);
      imageArray.push(downloadUrl);
    }

    const doc = {
      sellerId: getSessionItem("userId"),
      productImage: imageArray,
      productName: data.productName,
      productCategory: data.productCategory,
      productPrice: data.productPrice,
      productQunatity: data.productQunatity,
      productDescription: data.productDescription,
    };

    registerProduct({ req: doc });
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
    </form>
  );
};

export default RegisterForm;
