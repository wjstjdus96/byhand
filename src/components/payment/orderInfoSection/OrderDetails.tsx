import { ICheckedItem } from "../../../hooks/useCheckboxSelection";
import { IOrderItem } from "../../../types/order";
import { IProductResData } from "../../../types/product";
import PaymentSection from "../PaymentSection";
import OrderItem from "./OrderItem";

interface IOrderInfoSection {
  orderItems: ICheckedItem[] | IOrderItem[];
  orderProducts: IProductResData[] | undefined;
}

const OrderInfoSection = ({ orderItems, orderProducts }: IOrderInfoSection) => {
  console.log("orderProducts");

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
