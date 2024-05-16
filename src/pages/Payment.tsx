import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loading from "../components/common/Loading";
import AddressInfoSection from "../components/payment/addressInfoSection/AddressInfoSection";
import BuyerInfoSection from "../components/payment/buyerInfoSection/BuyerInfoSection";
import OrderInfoSection from "../components/payment/orderInfoSection/OrderDetails";
import TotalPriceSection from "../components/payment/totalPriceSection/TotalPriceSection";
import { Button } from "../components/ui/button";
import { usePayment } from "../hooks/payment/usePayment";
import Layout from "../layout/Layout";
import { IAddressInfo } from "../types/order";

export const SHIPPING_FEE = 2500;

const Payment = () => {
  const { state: paymentState } = useLocation();
  const [addressInfo, setAddressInfo] = useState<IAddressInfo | undefined>();
  const { onClickPayment, isLoading: isPaymentLoading } = usePayment({
    addressInfo,
    paymentState,
  });

  return (
    <Layout>
      <div className="px-[20vw] py-20 min-h-[75vh]">
        <h2 className="text-xl font-bold mb-5">결제</h2>
        <div className="grid grid-cols-5 gap-5">
          <div className="flex flex-col gap-5 col-span-3">
            <OrderInfoSection orderItems={paymentState.orderedItems} />
            <BuyerInfoSection />
            <AddressInfoSection
              addressInfo={addressInfo}
              setAddressInfo={setAddressInfo}
            />
          </div>
          <div className="flex flex-col gap-5 col-span-2">
            <TotalPriceSection orderTotalPrice={paymentState.totalPrice} />
            <Button onClick={onClickPayment}>결제</Button>
          </div>
        </div>
      </div>
      {isPaymentLoading && <Loading />}
    </Layout>
  );
};

export default Payment;
