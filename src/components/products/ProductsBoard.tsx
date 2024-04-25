import { IProductResData } from "../../types/product";
import GridItem from "../common/grid/GridItem";

const ProductsBoard = ({ resultData }: { resultData: IProductResData[] }) => {
  return (
    <div className="grid grid-cols-6 gap-3">
      {resultData.map((item: any) => (
        <GridItem data={item} />
      ))}
    </div>
  );
};

export default ProductsBoard;
