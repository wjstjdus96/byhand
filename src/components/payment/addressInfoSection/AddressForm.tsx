import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAddress } from "../../../hooks/payment/useAddress";
import { shippingAddressSchema } from "../../../utils/validationSchema";
import { TextInput } from "../../common/form/TextInput";
import { Button } from "../../ui/button";
import { IAddressFormData, IAddressInfo } from "../../../types/order";

interface IAddressForm {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  addressInfo: IAddressInfo | undefined;
  setAddressInfo: React.Dispatch<
    React.SetStateAction<IAddressInfo | undefined>
  >;
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
  const { handleClick } = useAddress({ setValue });

  const onSubmitHandler: SubmitHandler<IAddressFormData> = (data) => {
    setIsOpen(false);
    setAddressInfo({
      recipientName: data.recipientName,
      recipientPhone: data.recipientPhone,
      deliveryAddress: data.deliveryAddress,
      deliveryPostCode: data.deliveryPostcode,
    });
  };

  useEffect(() => {
    if (addressInfo) {
      setValue("recipientName", addressInfo.recipientName);
      setValue("recipientPhone", addressInfo.recipientPhone);
      setValue("deliveryAddress", addressInfo.deliveryAddress);
      setValue("deliveryPostcode", addressInfo.deliveryPostCode);
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
      <div className="flex gap-6 items-end">
        <TextInput
          name="deliveryPostcode"
          register={register}
          label="배송지 우편번호"
          errorMsg={errors.deliveryPostcode?.message}
        />
        <Button type="button" variant="secondary" onClick={handleClick}>
          우편번호 찾기
        </Button>
      </div>
      <TextInput
        name="deliveryAddress"
        register={register}
        label="배송지 상세 주소"
        errorMsg={errors.deliveryAddress?.message}
      />
      <Button type="submit" className="w-20 self-end">
        입력
      </Button>
    </form>
  );
};

export default AddressForm;
