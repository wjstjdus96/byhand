import { convertPriceUnit } from "../../../utils/convertPriceUnit";
import PaymentSection from "../PaymentSection";

interface ITotalPriceSection {
  orderTotalPrice: number;
}

const TotalPriceSection = ({ orderTotalPrice }: ITotalPriceSection) => {
  return (
    <PaymentSection sectionTitle="최종 결제금액">
      <div className="flex justify-between">
        <p>총 주문금액</p>
        <p>{convertPriceUnit(orderTotalPrice)}</p>
      </div>
      <div className="flex justify-between">
        <p>배달</p>
        <p>{convertPriceUnit(orderTotalPrice)}</p>
      </div>
    </PaymentSection>
  );
};

export default TotalPriceSection;
