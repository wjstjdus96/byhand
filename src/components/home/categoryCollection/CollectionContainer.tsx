import { useCollection } from "../../../hooks/home/useCollection";
import { IProductResData } from "../../../types/product";
import ProductGridItem from "../../common/product/ProductGridItem";
import Collection from "./Collection";

interface ICollectionContainer {
  categoryType: string;
  categoryTitle: string;
}

const CollectionContainer = ({
  categoryType,
  categoryTitle,
}: ICollectionContainer) => {
  const { data, isLoading } = useCollection({ category: categoryType });

  return (
    <Collection title={categoryTitle} category={categoryType}>
      {isLoading ? (
        <div>Loading... 추후 스켈레톤 수정</div>
      ) : (
        Array.isArray(data) &&
        data.map((item: IProductResData) => (
          <ProductGridItem key={item.id} data={item} />
        ))
      )}
    </Collection>
  );
};

export default CollectionContainer;
