import { useProductsByOrderIds } from "../../../hooks/payment/useProductsByOrderIds";
import { ICheckedItem } from "../../../hooks/useCheckboxSelection";
import { IOrderItem } from "../../../types/order";
import Loading from "../../common/Loading";
import PaymentSection from "../PaymentSection";
import OrderItem from "./OrderItem";

interface IOrderInfoSection {
  orderItems: ICheckedItem[] | IOrderItem[];
}

const OrderInfoSection = ({ orderItems }: IOrderInfoSection) => {
  const { orderProducts, isOrderProductsLoading } = useProductsByOrderIds({
    orderItemsId: orderItems.map(
      (item: IOrderItem | ICheckedItem) => item.itemId
    ),
  });

  if (isOrderProductsLoading) {
    return <Loading />;
  }

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
