import { useEffect, useState } from "react";
import CategorySelector from "../components/products/CategorySelector";
import SearchBar from "../components/products/SearchBar";
import SortSelector from "../components/products/SortSelector";
import { useFilteredResults } from "../hooks/useFilteredResults";
import Layout from "../layout/Layout";
import ProductsBoard from "../components/products/ProductsBoard";

function Products() {
  const [keyword, setKeyword] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("total");
  const [selectedSort, setSelectedSort] = useState("createdAt-desc");

  const { data } = useFilteredResults({
    keyword,
    category: selectedCategory,
    sort: selectedSort,
  });

  return (
    <Layout>
      <div className="px-10 py-20">
        <div className="flex flex-col items-center mb-6">
          <SearchBar keyword={keyword} setKeyword={setKeyword} />
          <CategorySelector
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <SortSelector
            selectedSort={selectedSort}
            setSelectedSort={setSelectedSort}
          />
        </div>
        {data && <ProductsBoard resultData={data} />}
      </div>
    </Layout>
  );
}

export default Products;
