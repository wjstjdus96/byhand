import { IAddressInfo } from "../../../types/order";
import { Button } from "../../ui/button";
import PaymentSection from "../PaymentSection";
import AddressModal from "./AddressModal";

interface IAddressInfoSection {
  addressInfo: IAddressInfo | undefined;
  setAddressInfo: React.Dispatch<
    React.SetStateAction<IAddressInfo | undefined>
  >;
}
const AddressInfoSection = ({
  addressInfo,
  setAddressInfo,
}: IAddressInfoSection) => {
  return (
    <PaymentSection sectionTitle="배송 정보">
      {addressInfo && (
        <div className="flex flex-col gap-2 mb-5">
          <p>{addressInfo.recipientName}</p>
          <p>{addressInfo.recipientPhone}</p>
          <p className="text-sm">{addressInfo.deliveryPostCode}</p>
          <p className="text-sm"> {addressInfo.deliveryAddress}</p>
        </div>
      )}
      <AddressModal setAddressInfo={setAddressInfo} addressInfo={addressInfo}>
        <Button className="bg-[#312fd0] h-8 hover:bg-[#2c208c]">
          {addressInfo ? "수정" : "입력"}
        </Button>
      </AddressModal>
    </PaymentSection>
  );
};

export default AddressInfoSection;
