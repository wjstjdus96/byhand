import React from "react";
import { dummyData } from "../home/categoryCollection/dummyData";
import GridItem from "../common/grid/GridItem";

const ProductsBoard = () => {
  return (
    <div className="grid grid-cols-6 gap-3">
      {dummyData.map((item: any) => (
        <GridItem data={item} />
      ))}
    </div>
  );
};

export default ProductsBoard;
