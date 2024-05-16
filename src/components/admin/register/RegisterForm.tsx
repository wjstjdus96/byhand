import { useRegisterHandler } from "../../../hooks/form/useRegisterHandler";
import ProductForm from "./ProductForm";

const RegisterForm = () => {
  const { onRegisterHandler, isLoading } = useRegisterHandler();

  return (
    <ProductForm
      buttonName="등록"
      onSubmitHandler={onRegisterHandler}
      isSubmitLoading={isLoading}
    />
  );
};

export default RegisterForm;
