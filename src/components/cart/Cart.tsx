import { useCheckedTotalPrice } from "../../hooks/cart/useCheckedTotalPrice";
import { useProductsByCartIds } from "../../hooks/cart/useProductsByCartIds";
import { useCheckboxSelection } from "../../hooks/useCheckboxSelection";
import { useCartProductStore } from "../../store/cartStore";
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
  const { products, refetch } = useProductsByCartIds({ cartItems });
  const { checkedItemsTotalPrice } = useCheckedTotalPrice({
    checkedItems,
    products,
    cartItems,
  });

  return (
    <div className="mt-6 h-full flex flex-col gap-5">
      <CartPayment
        checkedItems={checkedItems}
        checkedTotalPrice={checkedItemsTotalPrice}
      />
      {products && (
        <CartList
          products={products}
          checkedItems={checkedItems}
          singleCheckHandler={handleSingleCheck}
          allCheckHandler={handleAllCheck}
          initCheckHandler={handleInitItems}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default Cart;
