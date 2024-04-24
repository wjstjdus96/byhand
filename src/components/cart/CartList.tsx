import ProductBoardHead from "../common/productBoard/ProductBoardHead";
import ProductBoardItem from "../common/productBoard/ProductBoardItem";
import { dummyData } from "../home/categoryCollection/dummyData";
import { Separator } from "../ui/separator";

const CartList = () => {
  const data = dummyData;

  return (
    <div className="h-full overflow-y-hidden">
      <ProductBoardHead totLength={data.length} />
      <Separator />
      <div className="h-full overflow-y-scroll pb-6">
        {data.map((item) => (
          <ProductBoardItem item={item} />
        ))}
      </div>
    </div>
  );
};

export default CartList;
