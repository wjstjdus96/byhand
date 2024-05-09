import { useProductDeletion } from "../../../hooks/seller/useProductDeletion";
import { useSellerProducts } from "../../../hooks/seller/useSellerProducts";
import { useCheckboxSelection } from "../../../hooks/useCheckboxSelection";
import Loading from "../../common/Loading";
import Spinner from "../../common/Spinner";
import ProductListHead from "../../common/product/productList/ProductListHead";
import { Separator } from "../../ui/separator";
import AdminBoardItem from "./AdminBoardItem";

const AdminBoard = () => {
  const {
    ref: lastItemRef,
    products,
    isFetchingNextPage,
    isLoading,
  } = useSellerProducts();
  const allItems = products
    ? products.map((item) => ({
        itemId: item.id,
      }))
    : [];
  const { checkedItems, handleSingleCheck, handleAllCheck, handleInitItems } =
    useCheckboxSelection({
      allItems,
    });
  const { onClickItemDelete, onClickCheckedItemsDelte } = useProductDeletion({
    handleInitItems,
  });

  return (
    <div className="flex flex-col">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ProductListHead
            totLength={products?.length}
            size="medium"
            allCheckHandler={handleAllCheck}
            checkedItems={checkedItems}
            deleteCheckedItemsHandler={() =>
              onClickCheckedItemsDelte(checkedItems)
            }
          />
          <Separator className="my-5" />
          <div className="flex flex-col gap-3">
            {products &&
              products.map((item) => (
                <AdminBoardItem
                  item={item}
                  lastItemRef={lastItemRef}
                  handleSingleCheck={handleSingleCheck}
                  checkedItems={checkedItems}
                  handleItemDelete={onClickItemDelete}
                />
              ))}
            {isFetchingNextPage && <Spinner size="sm" />}
          </div>
        </>
      )}
    </div>
  );
};

export default AdminBoard;
