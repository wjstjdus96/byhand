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

  // useEffect(() => {
  //   // 스크립트를 동적으로 생성합니다.
  //   const script = document.createElement("script");
  //   script.src = "https://cdn.iamport.kr/v1/iamport.js";

  //   // 스크립트가 로드될 때 실행되는 콜백 함수를 정의합니다.
  //   script.onload = () => {
  //     // 스크립트가 로드된 후 실행할 코드를 여기에 작성합니다.
  //   };

  //   // 생성한 스크립트를 <head> 요소에 추가하여 로드합니다.
  //   document.head.appendChild(script);

  //   // 컴포넌트가 언마운트 될 때 스크립트를 제거합니다.
  //   return () => {
  //     document.head.removeChild(script);
  //   };
  // }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행됩니다.

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
