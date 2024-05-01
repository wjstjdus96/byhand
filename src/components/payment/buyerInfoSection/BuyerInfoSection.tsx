import { useState } from "react";
import { IBuyerInfo } from "../../../pages/Payment";
import { Button } from "../../ui/button";
import PaymentSection from "../PaymentSection";
import AlertDialogBox from "../../common/AlertDialogBox";

interface IBuyerInfoSection {
  buyerInfo: IBuyerInfo;
}

const BuyerInfoSection = ({ buyerInfo }: IBuyerInfoSection) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(true);
  };

  return (
    <PaymentSection sectionTitle="주문자 정보">
      <Button onClick={toggleModal}>입력</Button>
      {isOpen && (
        
      )}
    </PaymentSection>
  );
};

export default BuyerInfoSection;
