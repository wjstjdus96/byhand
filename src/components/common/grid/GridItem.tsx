import { useNavigate } from "react-router-dom";
import { convertPriceUnit } from "../../../utils/convertPriceUnit";
import { IProductData } from "../../admin/register/ProductForm";

const GridItem = ({ data }: { data: IProductData }) => {
  const navigate = useNavigate();
  const onClickItem = () => {
    navigate(`pro123123`);
  };

  return (
    <div onClick={onClickItem}>
      <img
        src={data.productImage[0]}
        alt="상품이미지"
        className="h-20vh rounded-sm"
      />
      <div className="flex flex-col gap-2 py-2 px-1">
        <p className="text-xs">{data.productCategory}</p>
        <h4 className="text-sm">{data.productName}</h4>
        <h5 className="text-sm">{convertPriceUnit(data.productPrice)}원</h5>
        <div className="flex justify-between text-[0.7rem]">
          <p>남은수량 : {data.productQuantity}</p>
        </div>
      </div>
    </div>
  );
};

export default GridItem;
