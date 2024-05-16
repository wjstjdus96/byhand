import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/common/Loading";
import ProductDescription from "../components/productDetail/ProductDescription";
import ProductImageCarousel from "../components/productDetail/ProductImageCarousel";
import ProductQuantitySection from "../components/productDetail/ProductQuantitySection";
import { Separator } from "../components/ui/separator";
import { useProductDetail } from "../hooks/productDetails.tsx/useProductDetail";
import Layout from "../layout/Layout";
import { convertPriceUnit } from "../utils/convertPriceUnit";

function ProductDetail() {
  const { productId, sellerId } = useParams();
  const { data, isLoading } = useProductDetail({
    productId: productId ? productId : "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Layout page="detail" product={data}>
      <div className="py-24 px-52 min-h-[75vh]">
        {data && (
          <>
            <div className="grid grid-cols-2 gap-12">
              <ProductImageCarousel images={data.productImage} />
              <div className="w-full aspect-square flex flex-col justify-between py-1">
                <div>
                  <p className="mb-3 text-slate-400">{data.productCategory}</p>
                  <h2 className=" text-2xl font-semibold">
                    {data.productName}
                  </h2>
                  <div className="my-10 flex items-end gap-1">
                    <h2 className=" text-2xl font-bold">
                      {convertPriceUnit(data.productPrice)}
                    </h2>
                    <span className="text-md mt-1">원</span>
                  </div>
                </div>
                {!sellerId && (
                  <ProductQuantitySection
                    quantity={data.productQuantity}
                    price={data.productPrice}
                  />
                )}
              </div>
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
