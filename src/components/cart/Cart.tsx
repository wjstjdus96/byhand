import { useCheckedTotalPrice } from "../../hooks/cart/useCheckedTotalPrice";
import { useProductsByProductIds } from "../../hooks/cart/useProductsByProductIds";
import { useCheckboxSelection } from "../../hooks/useCheckboxSelection";
import { useCartProductStore } from "../../store/cartStore";
import { convertPriceUnit } from "../../utils/convertPriceUnit";
import CartHead from "./CartHead";
import CartList from "./CartList";
import CartPayment from "./CartPayment";

const Cart = () => {
  const { cartItems } = useCartProductStore();
  const { checkedItems, handleSingleCheck, handleAllCheck, handleInitItems } =
    useCheckboxSelection({
      allItems: Object.entries(cartItems).map(([itemId, itemCount]) => ({
        itemId,
        itemCount,
      })),
    });
  const { products } = useProductsByProductIds();
  const { checkedItemsTotalPrice } = useCheckedTotalPrice({
    checkedItems,
    products,
  });

  return (
    <div className="fixed top-0 right-0 w-[80vh] h-screen  py-6 px-8 bg-white shadow flex flex-col gap-6 ">
      <CartHead />
      <CartPayment
        checkedNum={checkedItems.length}
        checkedTotalPrice={convertPriceUnit(checkedItemsTotalPrice)}
      />
      {!Object.keys(cartItems).length && (
        <p className="text-center pt-10">장바구니가 비었습니다</p>
      )}
      <CartList
        products={products}
        checkedItems={checkedItems}
        singleCheckHandler={handleSingleCheck}
        allCheckHandler={handleAllCheck}
        initCheckHandler={handleInitItems}
      />
    </div>
  );
};

export default Cart;
