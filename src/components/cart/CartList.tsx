import { ICheckedItem } from "../../hooks/useCheckboxSelection";
import { useCartProductStore } from "../../store/cartStore";
import { IProductResData } from "../../types/product";
import ProductListHead from "../common/product/productList/ProductListHead";
import { Separator } from "../ui/separator";
import CartListItem from "./CartListItem";

export interface ICheckHandler {
  handleSingleCheck: (isCheck: boolean, currentItem: ICheckedItem) => void;
  handleAllCheck: (isCheck: boolean) => void;
  handleInitItems: () => void;
}

interface ICartList {
  checkedItems: ICheckedItem[];
  products: IProductResData[];
  checkHandler: ICheckHandler;
}

const CartList = ({ checkedItems, checkHandler, products }: ICartList) => {
  const { cartItems, deleteCartItem } = useCartProductStore();

  const onClickDelete = () => {
    checkedItems.forEach((item) => {
      deleteCartItem(item.itemId);
    });
    checkHandler.handleInitItems();
  };

  return (
    <div className="h-full overflow-y-hidden">
      {products.length != 0 ? (
        <>
          <ProductListHead
            totLength={products.length}
            size="small"
            allCheckHandler={checkHandler.handleAllCheck}
            checkedItems={checkedItems}
            deleteCheckedItemsHandler={onClickDelete}
          />
          <Separator />
          <div className="h-full overflow-y-auto pb-20 pt-2 px-2">
            {products.map((product) => (
              <CartListItem
                product={product}
                selectedCnt={cartItems[product.id]}
                singleCheckHandler={checkHandler.handleSingleCheck}
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
