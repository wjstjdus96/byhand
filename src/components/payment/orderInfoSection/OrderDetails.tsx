import { IItemsToBuy } from "../../../hooks/payment/usePaymentRedirect";
import { useProductsByOrderIds } from "../../../hooks/payment/useProductsByOrderIds";
import { ICheckedItem } from "../../../hooks/useCheckboxSelection";
import PaymentSection from "../PaymentSection";
import OrderItem from "./OrderItem";

interface IOrderInfoSection {
  orderItems: ICheckedItem[] | IItemsToBuy[];
}

const OrderInfoSection = ({ orderItems }: IOrderInfoSection) => {
  const { orderProducts } = useProductsByOrderIds({
    orderItemsId: orderItems.map((item) => item.itemId),
  });

  return (
    <PaymentSection sectionTitle="주문 상품 정보">
      <div className="flex flex-col gap-3">
        {orderProducts &&
          orderProducts.map((product, idx) => (
            <OrderItem
              productInfo={product}
              selectedQuantity={orderItems[idx].itemCount!}
            />
          ))}
      </div>
    </PaymentSection>
  );
};

export default OrderInfoSection;
