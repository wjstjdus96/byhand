import Collection from "../../common/collection/Collection";
import GridItem from "../../common/grid/GridItem";
import { dummyData } from "./dummyData";

const CategoryCollection = () => {
  return (
    <div className="my-12 mx-20 flex flex-col gap-10 justify-center">
      <Collection title="패션">
        {dummyData.map((item: any) => (
          <GridItem data={item} />
        ))}
      </Collection>
      <Collection title="음식">
        {dummyData.map((item: any) => (
          <GridItem data={item} />
        ))}
      </Collection>
      <Collection title="리빙">
        {dummyData.map((item: any) => (
          <GridItem data={item} />
        ))}
      </Collection>
    </div>
  );
};

export default CategoryCollection;
