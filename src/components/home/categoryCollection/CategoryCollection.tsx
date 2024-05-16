import { HOME_COLLECTIONS } from "../../../consts/product";
import CollectionContainer from "./CollectionContainer";

const CategoryCollection = () => {
  return (
    <div className="my-11 mx-20 flex flex-col gap-10 justify-center">
      {HOME_COLLECTIONS.map((category) => (
        <CollectionContainer
          categoryTitle={category.title}
          categoryType={category.type}
        />
      ))}
    </div>
  );
};

export default CategoryCollection;
