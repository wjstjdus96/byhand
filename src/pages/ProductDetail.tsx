import { useParams } from "react-router-dom";
import ProductDescription from "../components/productDetail/ProductDescription";
import ProductImageCarousel from "../components/productDetail/ProductImageCarousel";
import ProductInfoSection from "../components/productDetail/ProductInfoSection";
import { Separator } from "../components/ui/separator";
import { useProductDetail } from "../hooks/productDetails.tsx/useProductDetail";
import Layout from "../layout/Layout";
import Loading from "../components/common/Loading";

function ProductDetail() {
  const { productId } = useParams();
  const { data, isLoading } = useProductDetail({
    productId: productId ? productId : "",
  });

  return (
    <Layout>
      <div className="py-24 px-52 min-h-[75vh]">
        {isLoading && <Loading />}
        {data && (
          <>
            <div className="grid grid-cols-2 gap-12">
              <ProductImageCarousel images={data.productImage} />
              <ProductInfoSection data={data} />
            </div>
            <Separator />
            <ProductDescription description={data.productDescription} />
          </>
        )}
      </div>
    </Layout>
  );
}

export default ProductDetail;
