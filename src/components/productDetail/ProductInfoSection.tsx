import { IProductResData } from "../../types/product";
import { convertPriceUnit } from "../../utils/convertPriceUnit";
import ProductQuantitySection from "./ProductQuantitySection";

const ProductInfoSection = ({ data }: { data: IProductResData }) => {
  return (
    <div className="w-full aspect-square">
      <p className="mb-3">{data.productCategory}</p>
      <h2 className=" text-2xl font-semibold">{data.productName}</h2>
      <h2 className="my-10 text-xl">{convertPriceUnit(data.productPrice)}원</h2>
      <ProductQuantitySection
        quantity={data.productQuantity}
        price={data.productPrice}
      />
    </div>
  );
};

export default ProductInfoSection;
