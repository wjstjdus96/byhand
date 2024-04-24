import CategorySelector from "./CategorySelector";
import SearchBar from "./SearchBar";
import SortSelector from "./SortSelector";

const ProductsHead = () => {
  return (
    <div className="flex flex-col items-center mb-6">
      <SearchBar />
      <CategorySelector />
      <SortSelector />
    </div>
  );
};

export default ProductsHead;
