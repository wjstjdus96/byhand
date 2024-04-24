import { useInfiniteScroll } from "../../../hooks/useInfiniteScroll";
import { getSessionItem } from "../../../utils/handleSession";
import ProductBoardHead from "../../common/productBoard/ProductBoardHead";
import ProductBoardItem from "../../common/productBoard/ProductBoardItem";
import { Separator } from "../../ui/separator";

const AdminBoard = () => {
  const uid = getSessionItem("userId");
  const { ref: lastItemRef, products } = useInfiniteScroll({ uid: uid! });

  return (
    <div>
      <ProductBoardHead totLength={products?.length} />
      <Separator className="my-5" />
      <div className="flex flex-col gap-3">
        {products &&
          products.map((item) => (
            <ProductBoardItem
              item={item}
              isSellerPage={true}
              ref={lastItemRef}
            />
          ))}
      </div>
    </div>
  );
};

export default AdminBoard;