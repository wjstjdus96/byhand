import { useProductsByProductIds } from "../../hooks/cart/useProductsByProductIds";
import ProductBoardHead from "../common/productBoard/ProductBoardHead";
import { Separator } from "../ui/separator";
import CartListItem from "./CartListItem";

const temp_data = [
  {
    productId: "Jv3S9dKBdWHiXLuQTWvE",
    selectedCnt: 5,
  },
  {
    productId: "iDM3FOrsOkfIHDzJmpfD",
    selectedCnt: 8,
  },
  {
    productId: "xpgbr0Y2lBrr6di9yoMX",
    selectedCnt: 3,
  },
];

const CartList = () => {
  const productIds = temp_data.map((item) => item.productId);
  const { products } = useProductsByProductIds({ productIds });

  return (
    <div className="h-full overflow-y-hidden">
      {products && (
        <>
          <ProductBoardHead totLength={products.length} />
          <Separator />
          <div className="h-full overflow-y-scroll pb-6">
            {/* {products.map((item) => (
              <CartListItem />
            ))} */}
          </div>
        </>
      )}
    </div>
  );
};

export default CartList;
