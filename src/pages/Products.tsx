import { useState } from "react";
import Spinner from "../components/common/Spinner";
import CategorySelector from "../components/products/CategorySelector";
import ProductsBoard from "../components/products/ProductsBoard";
import ProductsBoardSkeleton from "../components/products/ProductsBoardSkeleton";
import SearchBar from "../components/products/SearchBar";
import SortSelector from "../components/products/SortSelector";
import { useCategoryType } from "../hooks/products/useCategoryType";
import { useProducts } from "../hooks/products/useProducts";
import Layout from "../layout/Layout";
import Meta from "../components/common/Meta";

function Products() {
  const [keyword, setKeyword] = useState("");
  const { selectedCategory, setCategoryParams } = useCategoryType();
  const [selectedSort, setSelectedSort] = useState("createdAt-desc");
  const { products, ref, isFetchingNextPage, isLoading } = useProducts({
    keyword,
    category: selectedCategory,
    sort: selectedSort,
  });

  return (
    <Layout>
      <Meta page="products" />
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
        {products && <ProductsBoard ref={ref} resultData={products} />}
        {isLoading && <ProductsBoardSkeleton />}
        {isFetchingNextPage && <Spinner size="sm" />}
      </div>
    </Layout>
  );
}

export default Products;
