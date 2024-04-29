import { useSellerInfiniteScroll } from "../../../hooks/seller/useSellerInfiniteScroll";
import { useCheckboxSelection } from "../../../hooks/useCheckboxSelection";
import { getSessionItem } from "../../../utils/handleSession";
import ProductBoardHead from "../../common/productBoard/ProductBoardHead";
import ProductBoardItem from "../../common/productBoard/ProductBoardItem";
import { Separator } from "../../ui/separator";
import AdminBoardDeleteBtn from "./AdminBoardDeleteBtn";
import AdminBoardEditBtn from "./AdminBoardEditBtn";

const AdminBoard = () => {
  const uid = getSessionItem("userId");
  const { ref: lastItemRef, products } = useSellerInfiniteScroll({ uid: uid! });
  const { checkedItems, handleSingleCheck, handleAllCheck } =
    useCheckboxSelection({
      allItems: products
        ? products.map((item) => ({
            itemId: item.id,
          }))
        : [],
    });

  return (
    <div>
      <ProductBoardHead
        totLength={products?.length}
        size="medium"
        allCheckHandler={handleAllCheck}
        checkedItems={checkedItems}
      />
      <Separator className="my-5" />
      <div className="flex flex-col gap-3">
        {products &&
          products.map((item) => (
            <ProductBoardItem
              item={item}
              ref={lastItemRef}
              checkHandler={handleSingleCheck}
              checkedItems={checkedItems}
            >
              <div className="flex gap-1">
                <AdminBoardEditBtn productId={item.id} />
                <AdminBoardDeleteBtn productId={item.id} />
              </div>
            </ProductBoardItem>
          ))}
      </div>
    </div>
  );
};

export default AdminBoard;
