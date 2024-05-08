import { useState } from "react";
import CategorySelector from "../components/products/CategorySelector";
import ProductsBoard from "../components/products/ProductsBoard";
import SearchBar from "../components/products/SearchBar";
import SortSelector from "../components/products/SortSelector";
import { useFilteredResults } from "../hooks/products/useFilteredResults";
import Layout from "../layout/Layout";
import { useCategoryType } from "../hooks/products/useCategoryType";
import Spinner from "../components/common/Spinner";
import ProductsBoardSkeleton from "../components/products/ProductsBoardSkeleton";

function Products() {
  const [keyword, setKeyword] = useState("");
  const { selectedCategory, setCategoryParams } = useCategoryType();
  const [selectedSort, setSelectedSort] = useState("createdAt-desc");
  const { products, ref, isFetchingNextPage, isLoading } = useFilteredResults({
    keyword,
    category: selectedCategory,
    sort: selectedSort,
    limitNum: 12,
  });

  console.log(products);

  return (
    <Layout>
      <div className="px-10 py-24 min-h-[75vh]">
        <div className="flex flex-col items-center mb-6">
          <SearchBar keyword={keyword} setKeyword={setKeyword} />
          <CategorySelector
            selectedCategory={selectedCategory}
            setCategoryParams={setCategoryParams}
          />
          <SortSelector
            selectedSort={selectedSort}
            setSelectedSort={setSelectedSort}
          />
        </div>
        {isLoading && <ProductsBoardSkeleton />}
        {products && <ProductsBoard ref={ref} resultData={products} />}
        {isFetchingNextPage && <Spinner size="sm" />}
      </div>
    </Layout>
  );
}

export default Products;
