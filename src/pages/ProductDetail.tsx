import { useParams } from "react-router-dom";
import ProductDescription from "../components/productDetail/ProductDescription";
import ProductImageCarousel from "../components/productDetail/ProductImageCarousel";
import ProductInfoSection from "../components/productDetail/ProductInfoSection";
import { Separator } from "../components/ui/separator";
import { useGetProductDetail } from "../hooks/useGetProductDetail";
import Layout from "../layout/Layout";

function ProductDetail() {
  const { productId } = useParams();
  const { data, isLoading, error } = useGetProductDetail({
    productId: productId ? productId : "",
  });

  return (
    <Layout>
      {data && (
        <div className="py-20 px-40">
          <div className="grid grid-cols-2 gap-12">
            <ProductImageCarousel images={data.productImage} />
            <ProductInfoSection data={data} />
          </div>
          <Separator />
          <ProductDescription description={data.productDescription} />
        </div>
      )}
    </Layout>
  );
}

export default ProductDetail;
