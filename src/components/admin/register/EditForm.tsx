import { useEditHandler } from "../../../hooks/form/useEditHandler";
import ProductForm from "./ProductForm";

const EditForm = ({ editedProductId }: { editedProductId: string }) => {
  const { onEditHandler, isLoading } = useEditHandler({ editedProductId });

  return (
    <ProductForm
      buttonName="수정"
      onSubmitHandler={onEditHandler}
      editedProductId={editedProductId}
      isSubmitLoading={isLoading}
    />
  );
};

export default EditForm;
