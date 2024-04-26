import QuantityInput from "../common/form/QuantityInput";
import ProductBoardItem from "../common/productBoard/ProductBoardItem";

const CartListItem = ({ item }: { item: any }) => {
  return (
    <ProductBoardItem item={item}>
      <div>
        {/* <QuantityInput /> */}
        <p>총 합계</p>
      </div>
    </ProductBoardItem>
  );
};

export default CartListItem;
