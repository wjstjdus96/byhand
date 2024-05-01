import { convertPriceUnit } from "../../../utils/convertPriceUnit";

interface IOrderItem {
  productInfo: any;
  selectedQuantity: number;
}

const OrderItem = ({ productInfo, selectedQuantity }: IOrderItem) => {
  const totalPrice = selectedQuantity * productInfo.productPrice;

  return (
    <div className="flex gap-3">
      <img
        src={productInfo.productImage[0]}
        className="object-cover w-24 rounded-sm"
      />
      <div className="flex flex-col gap-1 w-full">
        <span>{productInfo.productName}</span>
        <div>
          <span className="text-sm">총 {selectedQuantity} 개</span>
          <span>｜</span>
          <span className="text-sm">{convertPriceUnit(totalPrice)}원</span>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
