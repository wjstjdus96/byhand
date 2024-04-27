import { useCollection } from "../../../hooks/useCollection";
import Collection from "../../common/collection/Collection";
import GridItem from "../../common/grid/GridItem";

const CategoryCollection = () => {
  const { data: fashionCollection, isLoading } = useCollection({
    category: "fashion",
  });
  const { data: foodCollection } = useCollection({
    category: "food",
  });
  const { data: livingCollection } = useCollection({
    category: "living",
  });
  const { data: beautyCollection } = useCollection({
    category: "beauty",
  });

  return (
    <div className="my-12 mx-20 flex flex-col gap-10 justify-center">
      <Collection title="패션" category="fashion">
        {fashionCollection &&
          fashionCollection.map((item: any) => <GridItem data={item} />)}
      </Collection>
      <Collection title="음식" category="food">
        {foodCollection &&
          foodCollection.map((item: any) => <GridItem data={item} />)}
      </Collection>
      <Collection title="리빙" category="living">
        {livingCollection &&
          livingCollection.map((item: any) => <GridItem data={item} />)}
      </Collection>
      <Collection title="뷰티" category="beauty">
        {beautyCollection &&
          beautyCollection.map((item: any) => <GridItem data={item} />)}
      </Collection>
    </div>
  );
};

export default CategoryCollection;
