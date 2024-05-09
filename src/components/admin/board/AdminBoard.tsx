import { useProductDeletion } from "../../../hooks/seller/useProductDeletion";
import { useSellerProducts } from "../../../hooks/seller/useSellerProducts";
import { useCheckboxSelection } from "../../../hooks/useCheckboxSelection";
import Loading from "../../common/Loading";
import Spinner from "../../common/Spinner";
import ProductListHead from "../../common/product/productList/ProductListHead";
import ProductListItem from "../../common/product/productList/ProductListItem";
import { Separator } from "../../ui/separator";
import AdminBoardDeleteBtn from "./AdminBoardDeleteBtn";
import AdminBoardEditBtn from "./AdminBoardEditBtn";

const AdminBoard = () => {
  const {
    ref: lastItemRef,
    products,
    isFetchingNextPage,
    isLoading,
  } = useSellerProducts();
  const { checkedItems, handleSingleCheck, handleAllCheck, handleInitItems } =
    useCheckboxSelection({
      allItems: products
        ? products.map((item) => ({
            itemId: item.id,
          }))
        : [],
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
                <ProductListItem
                  item={item}
                  ref={lastItemRef}
                  checkHandler={handleSingleCheck}
                  checkedItems={checkedItems}
                >
                  <div className="flex gap-1">
                    <AdminBoardEditBtn productId={item.id} />
                    <AdminBoardDeleteBtn
                      deleteHandler={() => onClickItemDelete(item.id)}
                    />
                  </div>
                </ProductListItem>
              ))}
            {isFetchingNextPage && <Spinner size="sm" />}
          </div>
        </>
      )}
    </div>
  );
};

export default AdminBoard;
