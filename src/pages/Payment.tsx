import { useLocation } from "react-router-dom";
import Layout from "../layout/Layout";
import OrderInfoSection from "../components/payment/orderInfoSection/OrderDetails";
import BuyerInfoSection from "../components/payment/buyerInfoSection/BuyerInfoSection";
import AddressInfoSection from "../components/payment/addressInfoSection/AddressInfoSection";
import TotalPriceSection from "../components/payment/totalPriceSection/TotalPriceSection";
import PaymentMethodSection from "../components/payment/paymentMethodSection/PaymentMethodSection";

const Payment = () => {
  const { state } = useLocation();

  return (
    <Layout>
      <div className="px-[14vw] py-24 min-h-[75vh]">
        <h2 className="text-xl font-bold mb-5">결제</h2>
        <div className="grid grid-cols-3 gap-5">
          <div className="flex flex-col gap-5 col-span-2">
            <OrderInfoSection orderItems={state.orderedItems} />
            <BuyerInfoSection />
            <AddressInfoSection />
          </div>
          <div className="flex flex-col gap-5 col-span-1">
            <TotalPriceSection orderTotalPrice={state.totalPrice} />
            <PaymentMethodSection />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Payment;
