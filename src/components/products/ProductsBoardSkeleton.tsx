import ProductGridItemSkeleton from "../common/product/ProductGridItemSkeleton";

const ProductsBoardSkeleton = () => {
  const ITEMS_NUM = new Array(12).fill(0);

  return (
    <div className="grid grid-cols-6 gap-x-3 gap-y-6">
      {ITEMS_NUM.map((_) => (
        <ProductGridItemSkeleton />
      ))}
    </div>
  );
};

export default ProductsBoardSkeleton;
