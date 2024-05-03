import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IAddressInfo } from "../../pages/Payment";
import { RequestPayParams, RequestPayResponse } from "../../types/imp";
import { useCartDeletion } from "../cart/useCartDeletion";
import { SHIPPING_FEE } from "./../../pages/Payment";
import { IOrderItem, useAddOrder } from "./useAddOrder";
import { useReduceProductQuantity } from "./useReduceProductQuantity";

interface IUsePayment {
  addressInfo: IAddressInfo | undefined;
  orderedItems: IOrderItem[];
  orderedTotalPrice: number;
  isCartItems: boolean;
}

export const usePayment = ({
  addressInfo,
  orderedItems,
  orderedTotalPrice,
  isCartItems,
}: IUsePayment) => {
  const [isLoading, setIsLoading] = useState(false);
  const { AddOrderToDB } = useAddOrder();
  const { reduceProductsQuantity } = useReduceProductQuantity({ orderedItems });
  const { deleteCartItems } = useCartDeletion();
  const navigate = useNavigate();

  const onClickPayment = () => {
    if (!addressInfo) {
      alert("배송정보를 입력해주세요");
      return;
    }

    if (!window.IMP) return;
    const { IMP } = window;
    IMP.init("imp25384063");

    const data: RequestPayParams = {
      pg: "nice.iamport02m",
      pay_method: "card",
      merchant_uid: `mid_${new Date().getTime()}`,
      amount: orderedTotalPrice + SHIPPING_FEE,
      name: "BYHAND 상품 결제",
      buyer_name: "홍길동",
      buyer_email: "01012341234",
      recipient_name: addressInfo.recipientName,
      recipient_phone: addressInfo.recipientPhone,
      shipping_addr: addressInfo.deliveryAddress,
    };

    const callback = async (response: RequestPayResponse) => {
      const { success, error_msg } = response;
      if (success) {
        setIsLoading(true);
        await AddOrderToDB({ orderedItems, orderedTotalPrice });
        await reduceProductsQuantity({ orderedItems });
        if (isCartItems) {
          await deleteCartItems(orderedItems);
        }
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
