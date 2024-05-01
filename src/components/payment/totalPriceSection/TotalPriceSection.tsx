import { convertPriceUnit } from "../../../utils/convertPriceUnit";
import { Separator } from "../../ui/separator";
import PaymentSection from "../PaymentSection";

interface ITotalPriceSection {
  orderTotalPrice: number;
}

const TotalPriceSection = ({ orderTotalPrice }: ITotalPriceSection) => {
  return (
    <PaymentSection sectionTitle="최종 결제금액">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p>총 주문금액</p>
          <p>{convertPriceUnit(orderTotalPrice)}</p>
        </div>
        <div className="flex justify-between">
          <p>배송비</p>
          <p>+ {convertPriceUnit(2500)}</p>
        </div>
        <Separator />
        <div className="flex justify-between">
          <p>총 결제금액</p>
          <p>{convertPriceUnit(orderTotalPrice + 2500)}</p>
        </div>
      </div>
    </PaymentSection>
  );
};

export default TotalPriceSection;
