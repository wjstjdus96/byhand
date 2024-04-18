import { useForm } from "react-hook-form";
import { TextInput } from "../../common/TextInput";
import ImageInput from "./ImageInput";
import TextArea from "../../common/TextArea";
import { Button } from "../../ui/button";

const RegisterForm = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="flex flex-col gap-6">
      <ImageInput name="productImage" label="상품이미지" />
      <TextInput name="productName" label="상품 이름" register={register} />
      <div className="grid grid-cols-2 gap-3">
        <TextInput name="productPrice" label="상품 가격" register={register} />
        <TextInput
          name="productQunatity"
          label="상품 수량"
          register={register}
        />
      </div>
      <TextArea name="productDescription" label="상품 설명" />
      <Button>등록</Button>
    </div>
  );
};

export default RegisterForm;
