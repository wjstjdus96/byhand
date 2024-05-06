import { SubmitHandler, useForm } from "react-hook-form";
import { TextInput } from "../../common/form/TextInput";
import { Button } from "../../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { shippingAddressSchema } from "../../../utils/validationSchema";
import { IAddressInfo } from "../../../pages/Payment";
import { useEffect } from "react";

interface IAddressForm {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  addressInfo: IAddressInfo | undefined;
  setAddressInfo: React.Dispatch<
    React.SetStateAction<IAddressInfo | undefined>
  >;
}

interface IAddressFormData {
  recipientName: string;
  recipientPhone: string;
  deliveryAddress: string;
}

const AddressForm = ({
  setIsOpen,
  setAddressInfo,
  addressInfo,
}: IAddressForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IAddressFormData>({
    resolver: zodResolver(shippingAddressSchema),
  });

  const onSubmitHandler: SubmitHandler<IAddressFormData> = (data) => {
    setIsOpen(false);
    setAddressInfo({
      recipientName: data.recipientName,
      recipientPhone: data.recipientPhone,
      deliveryAddress: data.deliveryAddress,
    });
  };

  useEffect(() => {
    if (addressInfo) {
      setValue("recipientName", addressInfo.recipientName);
      setValue("recipientPhone", addressInfo.recipientPhone);
      setValue("deliveryAddress", addressInfo.deliveryAddress);
    }
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="flex flex-col gap-5"
    >
      <div className="grid grid-cols-2 gap-2">
        <TextInput
          name="recipientName"
          register={register}
          label="수령인 이름"
          errorMsg={errors.recipientName?.message}
        />
        <TextInput
          name="recipientPhone"
          register={register}
          label="수령인 전화번호"
          errorMsg={errors.recipientPhone?.message}
        />
      </div>
      <TextInput
        name="deliveryAddress"
        register={register}
        label="배송지 주소"
        errorMsg={errors.deliveryAddress?.message}
      />
      <Button type="submit" className="w-20 self-end">
        입력
      </Button>
    </form>
  );
};

export default AddressForm;
