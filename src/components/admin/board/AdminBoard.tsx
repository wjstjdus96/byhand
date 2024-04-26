import { useSellerInfiniteScroll } from "../../../hooks/seller/useSellerInfiniteScroll";
import { getSessionItem } from "../../../utils/handleSession";
import ProductBoardHead from "../../common/productBoard/ProductBoardHead";
import ProductBoardItem from "../../common/productBoard/ProductBoardItem";
import { Separator } from "../../ui/separator";
import AdminBoardDeleteBtn from "./AdminBoardDeleteBtn";
import AdminBoardEditBtn from "./AdminBoardEditBtn";

const AdminBoard = () => {
  const uid = getSessionItem("userId");
  const { ref: lastItemRef, products } = useSellerInfiniteScroll({ uid: uid! });

  return (
    <div>
      <ProductBoardHead totLength={products?.length} size="medium" />
      <Separator className="my-5" />
      <div className="flex flex-col gap-3">
        {products &&
          products.map((item) => (
            <ProductBoardItem item={item} ref={lastItemRef}>
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
