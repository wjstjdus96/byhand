import { IAddressInfo } from "../../../pages/Payment";
import PaymentSection from "../PaymentSection";

interface IAddressInfoSection {
  addressInfo: IAddressInfo;
}
const AddressInfoSection = ({ addressInfo }: IAddressInfoSection) => {
  return (
    <PaymentSection sectionTitle="배송 정보">
      <p>으아</p>
    </PaymentSection>
  );
};

export default AddressInfoSection;
