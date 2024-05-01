import { convertPriceUnit } from "../../../utils/convertPriceUnit";

interface IOrderItem {
  productInfo: any;
  selectedQuantity: number;
}

const OrderItem = ({ productInfo }: IOrderItem) => {
  console.log(productInfo);

  return (
    <div className="flex">
      <img
        src={productInfo.productImage[0]}
        className="object-cover w-24 rounded-sm"
      />
      <div className="flex flex-col justify-between w-full py-1">
        <span>{productInfo.productName}</span>
        <span className="text-sm">
          {convertPriceUnit(productInfo.productPrice)}원
        </span>
      </div>
    </div>
  );
};

export default OrderItem;
