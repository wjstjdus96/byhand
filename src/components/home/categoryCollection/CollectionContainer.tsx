import { useCollection } from "../../../hooks/home/useCollection";
import { IProductResData } from "../../../types/product";
import ProductGridItem from "../../common/product/productGrid/ProductGridItem";
import Collection from "./Collection";
import CollectionSkeleton from "./CollectionSkeleton";

interface ICollectionContainer {
  categoryType: string;
  categoryTitle: string;
}

const CollectionContainer = ({
  categoryType,
  categoryTitle,
}: ICollectionContainer) => {
  const { data, isLoading } = useCollection({ category: categoryType });

  if (isLoading) {
    return <CollectionSkeleton />;
  }

  return (
    <Collection title={categoryTitle} category={categoryType}>
      {Array.isArray(data) &&
        data.map((item: IProductResData) => (
          <ProductGridItem key={item.id} data={item} />
        ))}
    </Collection>
  );
};

export default CollectionContainer;
