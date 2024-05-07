import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUserData } from "../../api/user";
import { IAddressInfo } from "../../pages/Payment";
import { RequestPayParams, RequestPayResponse } from "../../types/imp";
import { useCartDeletion } from "../cart/useCartDeletion";
import { IOrderItem, useAddOrder } from "./useAddOrder";
import { useReduceProductQuantity } from "./useReduceProductQuantity";
import { queryClient } from "../../App";

interface IUsePayment {
  addressInfo: IAddressInfo | undefined;
  buyerInfo: IUserData | undefined;
  orderedItems: IOrderItem[];
  orderedTotalPrice: number;
  isCartItems: boolean;
}

export const usePayment = ({
  addressInfo,
  buyerInfo,
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
      amount: 500,
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
        await AddOrderToDB({ orderedItems, orderedTotalPrice });
        await reduceProductsQuantity({ orderedItems });
        if (isCartItems) {
          await deleteCartItems(orderedItems);
        }
        setIsLoading(false);
        alert("결제 성공");
        navigate("/");
      } else {
        setIsLoading(true);
        if (isCartItems) {
          console.log("dk");
          queryClient.invalidateQueries({ queryKey: ["cart"] }).then(() => {
            deleteCartItems(orderedItems);
            console.log("으아");
          });
        }
        await AddOrderToDB({ orderedItems, orderedTotalPrice });
        await reduceProductsQuantity({ orderedItems });

        setIsLoading(false);
        alert(`결제 실패: ${error_msg}`);
      }
    };

    IMP.request_pay(data, callback);
  };

  return { onClickPayment, isLoading };
};
