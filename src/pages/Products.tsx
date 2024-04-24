import ProductsBoard from "../components/products/ProductsBoard";
import ProductsHead from "../components/products/ProductsHead";
import Layout from "../layout/Layout";

function Products() {
  return (
    <Layout>
      <div className="px-10 py-20">
        <ProductsHead />
        <ProductsBoard />
      </div>
    </Layout>
  );
}

export default Products;
