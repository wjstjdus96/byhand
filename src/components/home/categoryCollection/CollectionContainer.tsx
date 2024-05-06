import { useCollection } from "../../../hooks/home/useCollection";
import { IProductResData } from "../../../types/product";
import ProductGridItem from "../../common/product/ProductGridItem";
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
  const COLLECTION_NUM = new Array(6).fill(0);

  return (
    <Collection title={categoryTitle} category={categoryType}>
      {isLoading && COLLECTION_NUM.map((_) => <CollectionSkeleton />)}
      {Array.isArray(data) &&
        data.map((item: IProductResData) => (
          <ProductGridItem key={item.id} data={item} />
        ))}
    </Collection>
  );
};

export default CollectionContainer;
