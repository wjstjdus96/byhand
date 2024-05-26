import { useNavigate } from "react-router-dom";
import { usePrefetchProduct } from "../../../../hooks/productDetail/usePrefetchProduct";
import { IProductResData } from "../../../../types/product";
import { convertPriceUnit } from "../../../../utils/convertPriceUnit";

interface IProductGridItem {
  data: IProductResData;
  lastItemRef?: React.ForwardedRef<HTMLDivElement>;
}

const ProductGridItem = ({ data, lastItemRef }: IProductGridItem) => {
  const { handleMouseEnter, handleMouseLeave } = usePrefetchProduct({
    productId: data.id,
  });
  const navigate = useNavigate();
  const onClickItem = () => {
    navigate(`/products/${data.id}`);
  };

  return (
    <div
      onClick={onClickItem}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={lastItemRef}
      className="cursor-pointer"
    >
      <div className="flex w-full aspect-square overflow-hidden">
        <img
          src={data.productThumbnail}
          alt="상품이미지"
          className=" rounded-sm w-full h-full object-cover transition-transform transform hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-col gap-2 py-3 px-1">
        <div>
          <p className="text-xs text-slate-500 mb-1">{data.productCategory}</p>
          <p className="text-md">{data.productName}</p>
        </div>
        <div className="flex items-center gap-[2px]">
          <span className="text-md font-bold">
            {convertPriceUnit(data.productPrice)}
          </span>
          <span className=" text-xs">원</span>
        </div>

        <div className="flex justify-between text-[0.7rem] text-slate-600">
          <p>남은수량 : {data.productQuantity}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductGridItem;
