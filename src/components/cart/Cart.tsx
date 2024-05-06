import { useCheckedTotalPrice } from "../../hooks/cart/useCheckedTotalPrice";
import { useProductsByProductIds } from "../../hooks/cart/useProductsByProductIds";
import { useCheckboxSelection } from "../../hooks/useCheckboxSelection";
import { useCartProductStore } from "../../store/cartStore";
import Spinner from "../common/Spinner";
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

  console.log(cartItems);
  return (
    <div className="mt-6 flex flex-col gap-5 ">
      <CartPayment
        checkedItems={checkedItems}
        checkedTotalPrice={checkedItemsTotalPrice}
      />
      {!Object.keys(cartItems).length ? (
        <p className="text-center pt-10">장바구니가 비었습니다</p>
      ) : (
        <CartList
          products={products}
          checkedItems={checkedItems}
          singleCheckHandler={handleSingleCheck}
          allCheckHandler={handleAllCheck}
          initCheckHandler={handleInitItems}
        />
      )}
    </div>
  );
};

export default Cart;
