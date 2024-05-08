import { forwardRef } from "react";
import { IProductResData } from "../../types/product";
import ProductGridItem from "../common/product/ProductGridItem";

interface IProductsBoard {
  resultData: IProductResData[];
}

const ProductsBoard = forwardRef<HTMLDivElement, IProductsBoard>(
  ({ resultData }, ref) => {
    return (
      <>
        {resultData.length == 0 ? (
          <div className="py-24 text-center">상품이 없습니다</div>
        ) : (
          <div className="grid grid-cols-6 gap-x-3 gap-y-6">
            {resultData.map((item: any) => (
              <ProductGridItem data={item} lastItemRef={ref} />
            ))}
          </div>
        )}
      </>
    );
  }
);

export default ProductsBoard;
