import { IUser } from "../../../store/userStore";
import PaymentSection from "../PaymentSection";

const BuyerInfoSection = ({ buyerInfo }: { buyerInfo: IUser | null }) => {
  return (
    <PaymentSection sectionTitle="주문자 정보">
      {buyerInfo ? (
        <div className="flex flex-col gap-2">
          <p>{buyerInfo.userName}</p>
          <p>{buyerInfo.userEmail}</p>
        </div>
      ) : (
        <p>로그인을 다시 해주십시오</p>
      )}
    </PaymentSection>
  );
};

export default BuyerInfoSection;
