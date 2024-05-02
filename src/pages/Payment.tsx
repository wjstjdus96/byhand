import { useState } from "react";
import { useLocation } from "react-router-dom";
import AddressInfoSection from "../components/payment/addressInfoSection/AddressInfoSection";
import OrderInfoSection from "../components/payment/orderInfoSection/OrderDetails";
import TotalPriceSection from "../components/payment/totalPriceSection/TotalPriceSection";
import { Button } from "../components/ui/button";
import Layout from "../layout/Layout";
import { RequestPayParams, RequestPayResponse } from "../types/imp";

export interface IAddressInfo {
  recipientName: string;
  recipientPhone: string;
  deliveryAddress: string;
}

const Payment = () => {
  const { state } = useLocation();
  const [addressInfo, setAddressInfo] = useState<IAddressInfo | undefined>();

  const onClickPayment = () => {
    if (!window.IMP) return;
    const { IMP } = window;
    IMP.init("imp25384063");

    const data: RequestPayParams = {
      pg: "nice.iamport02m",
      pay_method: "card",
      merchant_uid: `mid_${new Date().getTime()}`,
      amount: state.totalPrice,
      name: "아임포트 결제 데이터 분석",
      buyer_name: "홍길동",
      buyer_tel: "01012341234",
      buyer_addr: "신사동 661-16",
      buyer_postcode: "06018",
    };

    const callback = (response: RequestPayResponse) => {
      const { success, merchant_uid, error_msg, paid_amount, status } =
        response;

      if (success) {
        alert("결제 성공");
      } else {
        alert(`결제 실패: ${error_msg}`);
      }
    };

    IMP.request_pay(data, callback);
  };

  return (
    <Layout>
      <div className="px-[20vw] py-20 min-h-[75vh]">
        <h2 className="text-xl font-bold mb-5">결제</h2>
        <div className="grid grid-cols-5 gap-5">
          <div className="flex flex-col gap-5 col-span-3">
            <OrderInfoSection orderItems={state.orderedItems} />
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
    </Layout>
  );
};

export default Payment;
