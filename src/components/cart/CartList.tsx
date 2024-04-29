import { useEffect } from "react";
import { useProductsByProductIds } from "../../hooks/cart/useProductsByProductIds";
import { ICheckedItem } from "../../hooks/useCheckboxSelection";
import { useCartProductStore } from "../../store/cartStore";
import ProductBoardHead from "../common/productBoard/ProductBoardHead";
import { Separator } from "../ui/separator";
import CartListItem from "./CartListItem";

interface ICartList {
  checkedItems: ICheckedItem[];
  singleCheckHandler: (isCheck: boolean, currentItem: ICheckedItem) => void;
  allCheckHandler: (isCheck: boolean) => void;
  totalPriceHandler: React.Dispatch<React.SetStateAction<number>>;
  initCheckHandler: () => void;
}

const CartList = ({
  singleCheckHandler,
  allCheckHandler,
  checkedItems,
  totalPriceHandler,
  initCheckHandler,
}: ICartList) => {
  const { cartItems, deleteCartItem } = useCartProductStore();
  const { products } = useProductsByProductIds();

  const onClickDelete = () => {
    checkedItems.forEach((item) => {
      deleteCartItem(item.itemId);
      initCheckHandler();
    });
  };

  const getItemCurrentPrice = (itemId: string) => {
    const product = products?.find((product) => product.id === itemId);
    if (product) {
      return product.productPrice;
    }
    return 0;
  };

  useEffect(() => {
    console.log(checkedItems, cartItems);
    let totPrice = 0;
    checkedItems.forEach(({ itemId }) => {
      const currentPrice = getItemCurrentPrice(itemId);
      const itemCount = cartItems[itemId];
      totPrice += itemCount * currentPrice;
    });

    totalPriceHandler(totPrice);
  }, [checkedItems, cartItems]);

  return (
    <div className="h-full overflow-y-hidden">
      {products && (
        <>
          <ProductBoardHead
            totLength={products.length}
            size="small"
            allCheckHandler={allCheckHandler}
            checkedItems={checkedItems}
            deleteCheckedItemsHandler={onClickDelete}
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
