import { forwardRef } from "react";
import { IProductResData } from "../../types/product";
import ProductGridItem from "../common/product/ProductGridItem";

interface IProductsBoard {
  resultData: IProductResData[];
}

const ProductsBoard = forwardRef<HTMLDivElement, IProductsBoard>(
  ({ resultData }, ref) => {
    return (
      <div className="grid grid-cols-6 gap-3">
        {resultData.map((item: any) => (
          <ProductGridItem data={item} lastItemRef={ref} />
        ))}
      </div>
    );
  }
);

export default ProductsBoard;
