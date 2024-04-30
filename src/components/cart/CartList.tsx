import { ICheckedItem } from "../../hooks/useCheckboxSelection";
import { useCartProductStore } from "../../store/cartStore";
import { IProductResData } from "../../types/product";
import ProductBoardHead from "../common/productBoard/ProductBoardHead";
import { Separator } from "../ui/separator";
import CartListItem from "./CartListItem";

interface ICartList {
  checkedItems: ICheckedItem[];
  products: IProductResData[] | undefined;
  singleCheckHandler: (isCheck: boolean, currentItem: ICheckedItem) => void;
  allCheckHandler: (isCheck: boolean) => void;
  initCheckHandler: () => void;
}

const CartList = ({
  singleCheckHandler,
  allCheckHandler,
  checkedItems,
  initCheckHandler,
  products,
}: ICartList) => {
  const { cartItems, deleteCartItem } = useCartProductStore();

  const onClickDelete = () => {
    checkedItems.forEach((item) => {
      deleteCartItem(item.itemId);
      initCheckHandler();
    });
  };

  return (
    <div className="h-full overflow-y-hidden">
      {products && products?.length != 0 && (
        <>
          <ProductBoardHead
            totLength={products.length}
            size="small"
            allCheckHandler={allCheckHandler}
            checkedItems={checkedItems}
            deleteCheckedItemsHandler={onClickDelete}
          />
          <Separator />
          <div className="h-full overflow-y-auto pb-10 pt-2 px-2">
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
