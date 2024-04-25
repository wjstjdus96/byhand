import { useGetCollection } from "../../../hooks/useGetCollection";
import Collection from "../../common/collection/Collection";
import GridItem from "../../common/grid/GridItem";

const CategoryCollection = () => {
  const { data: fashionCollection, isLoading } = useGetCollection({
    category: "fashion",
  });
  const { data: foodCollection } = useGetCollection({
    category: "food",
  });
  const { data: livingCollection } = useGetCollection({
    category: "living",
  });
  const { data: beautyCollection } = useGetCollection({
    category: "beauty",
  });

  return (
    <div className="my-12 mx-20 flex flex-col gap-10 justify-center">
      <Collection title="패션이 궁금하신가요?" category="fashion">
        {fashionCollection &&
          fashionCollection.map((item: any) => <GridItem data={item} />)}
      </Collection>
      <Collection title="맛있는 음식과 함께" category="food">
        {foodCollection &&
          foodCollection.map((item: any) => <GridItem data={item} />)}
      </Collection>
      <Collection title="예쁜 집을 만들기 위해서" category="living">
        {livingCollection &&
          livingCollection.map((item: any) => <GridItem data={item} />)}
      </Collection>
      <Collection title="얼굴에도" category="beauty">
        {beautyCollection &&
          beautyCollection.map((item: any) => <GridItem data={item} />)}
      </Collection>
    </div>
  );
};

export default CategoryCollection;
