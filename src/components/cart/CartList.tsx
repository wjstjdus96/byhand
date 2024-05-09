import { RefetchOptions } from "@tanstack/react-query";
import { ICheckedItem } from "../../hooks/useCheckboxSelection";
import { useCartProductStore } from "../../store/cartStore";
import { IProductResData } from "../../types/product";
import ProductListHead from "../common/product/productList/ProductListHead";
import { Separator } from "../ui/separator";
import CartListItem from "./CartListItem";

interface ICartList {
  checkedItems: ICheckedItem[];
  products: IProductResData[];
  singleCheckHandler: (isCheck: boolean, currentItem: ICheckedItem) => void;
  allCheckHandler: (isCheck: boolean) => void;
  initCheckHandler: () => void;
  refetch: (options?: RefetchOptions | undefined) => any;
}

const CartList = ({
  singleCheckHandler,
  allCheckHandler,
  checkedItems,
  initCheckHandler,
  products,
  refetch,
}: ICartList) => {
  const { cartItems, deleteCartItem } = useCartProductStore();

  const onClickDelete = () => {
    checkedItems.forEach((item) => {
      deleteCartItem(item.itemId);
    });
    initCheckHandler();
    refetch();
  };

  return (
    <div className="h-full overflow-y-hidden">
      {products.length != 0 ? (
        <>
          <ProductListHead
            totLength={products.length}
            size="small"
            allCheckHandler={allCheckHandler}
            checkedItems={checkedItems}
            deleteCheckedItemsHandler={onClickDelete}
          />
          <Separator />
          <div className="h-full overflow-y-auto pb-20 pt-2 px-2">
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
      ) : (
        <p className="text-center pt-10">장바구니가 비었습니다</p>
      )}
    </div>
  );
};

export default CartList;
