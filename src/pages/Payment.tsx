import { useState } from "react";
import { useLocation } from "react-router-dom";
import AddressInfoSection from "../components/payment/addressInfoSection/AddressInfoSection";
import BuyerInfoSection from "../components/payment/buyerInfoSection/BuyerInfoSection";
import OrderInfoSection from "../components/payment/orderInfoSection/OrderDetails";
import TotalPriceSection from "../components/payment/totalPriceSection/TotalPriceSection";
import { Button } from "../components/ui/button";
import { usePayment } from "../hooks/payment/usePayment";
import Layout from "../layout/Layout";
import Loading from "../components/common/Loading";
import { useUserInfo } from "../hooks/useUserInfo";

export interface IAddressInfo {
  recipientName: string;
  recipientPhone: string;
  deliveryAddress: string;
}

export const SHIPPING_FEE = 2500;

const Payment = () => {
  const { state } = useLocation();
  const [addressInfo, setAddressInfo] = useState<IAddressInfo | undefined>();
  const { data: buyerInfo } = useUserInfo();
  const { onClickPayment, isLoading } = usePayment({
    addressInfo,
    buyerInfo,
    orderedItems: state.orderedItems,
    orderedTotalPrice: state.totalPrice,
    isCartItems: state.isCartItems,
  });

  console.log(buyerInfo);

  return (
    <Layout>
      <div className="px-[20vw] py-20 min-h-[75vh]">
        <h2 className="text-xl font-bold mb-5">결제</h2>
        <div className="grid grid-cols-5 gap-5">
          <div className="flex flex-col gap-5 col-span-3">
            <OrderInfoSection orderItems={state.orderedItems} />
            <BuyerInfoSection buyerInfo={buyerInfo} />
            <AddressInfoSection
              addressInfo={addressInfo}
              setAddressInfo={setAddressInfo}
            />
          </div>
          <div className="flex flex-col gap-5 col-span-2">
            <TotalPriceSection orderTotalPrice={state.totalPrice} />
            <Button onClick={onClickPayment}>결제</Button>
          </div>
        </div>
      </div>
      {isLoading && <Loading />}
    </Layout>
  );
};

export default Payment;
