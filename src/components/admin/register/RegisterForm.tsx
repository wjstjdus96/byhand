import { SubmitHandler, useForm } from "react-hook-form";
import { TextInput } from "../../common/TextInput";
import ImageInput from "./ImageInput";
import TextArea from "../../common/TextArea";
import { Button } from "../../ui/button";

interface IProductData {
  productImage: string[];
  productName: string;
  productCategory: string;
  productPrice: number;
  productQunatity: number;
  productDescription: string;
}

const RegisterForm = () => {
  const { register, handleSubmit } = useForm<IProductData>();

  const onSubmitHandler: SubmitHandler<IProductData> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="flex flex-col gap-6"
    >
      <ImageInput name="productImage" label="상품이미지" />
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
      <TextArea name="productDescription" label="상품 설명" />
      <Button type="submit">등록</Button>
    </form>
  );
};

export default RegisterForm;
