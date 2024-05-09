import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { queryClient } from "../../App";
import { IUserData } from "../../api/user";
import { SHIPPING_FEE } from "../../pages/Payment";
import { RequestPayParams, RequestPayResponse } from "../../types/imp";
import { IAddressInfo, IPaymentState } from "../../types/order";
import { useCartDeletion } from "../cart/useCartDeletion";
import { useAddOrder } from "./useAddOrder";
import { useReduceProductQuantity } from "./useReduceProductQuantity";

interface IUsePayment {
  addressInfo: IAddressInfo | undefined;
  buyerInfo: IUserData | undefined;
  paymentState: IPaymentState;
}

export const usePayment = ({
  addressInfo,
  buyerInfo,
  paymentState,
}: IUsePayment) => {
  const [isLoading, setIsLoading] = useState(false);
  const { AddOrderToDB } = useAddOrder();
  const { reduceProductsQuantity } = useReduceProductQuantity({
    orderedItems: paymentState.orderedItems,
  });
  const { deleteCartItems } = useCartDeletion();
  const navigate = useNavigate();

  const onClickPayment = () => {
    if (!addressInfo) {
      alert("배송정보를 입력해주세요");
      return;
    }

    if (!buyerInfo) {
      alert("로그인을 다시 시도하신 후 결제해주세요");
      return;
    }

    if (!window.IMP) return;
    const { IMP } = window;
    IMP.init("imp25384063");

    const data: RequestPayParams = {
      pg: "nice.iamport02m",
      pay_method: "card",
      merchant_uid: `mid_${new Date().getTime()}`,
      amount: paymentState.orderedTotalPrice + SHIPPING_FEE,
      name: "BYHAND 상품 결제",
      buyer_name: buyerInfo.userName,
      buyer_email: buyerInfo.userEmail,
      recipient_name: addressInfo.recipientName,
      recipient_phone: addressInfo.recipientPhone,
      shipping_addr: addressInfo.deliveryPostCode + addressInfo.deliveryAddress,
    };

    const callback = async (response: RequestPayResponse) => {
      const { success, error_msg } = response;
      if (success) {
        setIsLoading(true);
        if (paymentState.isCartItems) {
          queryClient.invalidateQueries({ queryKey: ["cart"] }).then(() => {
            deleteCartItems(paymentState.orderedItems);
          });
        }
        await AddOrderToDB({
          orderedItems: paymentState.orderedItems,
          orderedTotalPrice: paymentState.orderedTotalPrice,
        });
        await reduceProductsQuantity({
          orderedItems: paymentState.orderedItems,
        });

        setIsLoading(false);
        alert("결제 성공");
        navigate("/");
      } else {
        alert(`결제 실패: ${error_msg}`);
      }
    };

    IMP.request_pay(data, callback);
  };

  return { onClickPayment, isLoading };
};
