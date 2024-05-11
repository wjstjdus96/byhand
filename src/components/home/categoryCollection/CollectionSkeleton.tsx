import ProductGridItemSkeleton from "../../common/product/productGrid/ProductGridItemSkeleton";
import { Skeleton } from "../../ui/skeleton";

const CollectionSkeleton = () => {
  const COLLECTION_NUM = new Array(6).fill(0);

  return (
    <div>
      <Skeleton className="h-5 w-40 mb-4" />
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        {COLLECTION_NUM.map((_) => (
          <ProductGridItemSkeleton />
        ))}
      </div>
    </div>
  );
};

export default CollectionSkeleton;
