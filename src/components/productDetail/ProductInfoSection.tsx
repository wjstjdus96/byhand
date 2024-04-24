import ProductQuantitySection from "./ProductQuantitySection";

const ProductInfoSection = ({ data }: { data: any }) => {
  return (
    <div>
      <p className="mb-3">{data.productCategory}</p>
      <h2 className=" text-2xl font-semibold">{data.productName}</h2>
      <h2 className="my-10 text-xl">{data.productPrice}원</h2>
      <ProductQuantitySection quantity={data.productQuantity} />
    </div>
  );
};

export default ProductInfoSection;
