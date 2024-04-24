import { dummyData } from "../components/home/categoryCollection/dummyData";
import ProductDescription from "../components/productDetail/ProductDescription";
import ProductImageCarousel from "../components/productDetail/ProductImageCarousel";
import ProductInfoSection from "../components/productDetail/ProductInfoSection";
import { Separator } from "../components/ui/separator";
import Layout from "../layout/Layout";

function ProductDetail() {
  const data = dummyData[0];
  return (
    <Layout>
      <div className="py-20 px-28">
        <div className="grid grid-cols-2 gap-10">
          <ProductImageCarousel images={data.productImage} />
          <ProductInfoSection data={data} />
        </div>
        <Separator />
        <ProductDescription description={"아아"} />
      </div>
    </Layout>
  );
}

export default ProductDetail;
