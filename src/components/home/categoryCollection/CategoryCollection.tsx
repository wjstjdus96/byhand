import { CATEGORY_COLLECTION } from "../../../consts/data";
import CollectionContainer from "./CollectionContainer";

const CategoryCollection = () => {
  return (
    <div className="my-12 mx-20 flex flex-col gap-10 justify-center">
      {CATEGORY_COLLECTION.map((category) => (
        <CollectionContainer
          categoryTitle={category.title}
          categoryType={category.type}
        />
      ))}
    </div>
  );
};

export default CategoryCollection;
