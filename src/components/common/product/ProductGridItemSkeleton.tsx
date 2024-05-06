import { Skeleton } from "../../ui/skeleton";

const ProductGridItemSkeleton = () => {
  return (
    <div>
      <Skeleton className="w-full rounded-sm aspect-square " />
      <div className="flex flex-col gap-2 py-2 px-1">
        <Skeleton className="h-5" />
        <Skeleton className="h-5" />
        <Skeleton className="h-5 w-20" />
      </div>
    </div>
  );
};

export default ProductGridItemSkeleton;
