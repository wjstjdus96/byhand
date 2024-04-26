import { useProductsByProductIds } from "../../hooks/cart/useProductsByProductIds";
import { ICheckedCartItem } from "../../hooks/useCheckboxSelection";
import { useCartProductStore } from "../../store/cartStore";
import ProductBoardHead from "../common/productBoard/ProductBoardHead";
import { Separator } from "../ui/separator";
import CartListItem from "./CartListItem";

interface ICartList {
  checkedItems: ICheckedCartItem[];
  singleCheckHandler: (isCheck: boolean, currentItem: ICheckedCartItem) => void;
  allCheckHandler: (isCheck: boolean) => void;
}

const CartList = ({
  singleCheckHandler,
  allCheckHandler,
  checkedItems,
}: ICartList) => {
  const { cartItems } = useCartProductStore();
  const productIds = Object.keys(cartItems);
  const { products } = useProductsByProductIds({ productIds });

  return (
    <div className="h-full overflow-y-hidden">
      {products && (
        <>
          <ProductBoardHead
            totLength={products.length}
            size="small"
            allCheckHandler={allCheckHandler}
            checkedLength={checkedItems.length}
          />
          <Separator />
          <div className="h-full overflow-y-scroll pb-6 pt-2 px-2">
            {products.map((product) => (
              <CartListItem
                product={product}
                selectedCnt={cartItems[product.id]}
                singleCheckHandler={singleCheckHandler}
                checkedItems={checkedItems}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CartList;
