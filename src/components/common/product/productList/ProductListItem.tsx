import { createContext, memo, useContext } from "react";
import { ICheckedItem } from "../../../../hooks/useCheckboxSelection";
import { IProductResData } from "../../../../types/product";
import { convertPriceUnit } from "../../../../utils/convertPriceUnit";
import { Checkbox } from "../../../ui/checkbox";

interface IProductListItem {
  item: IProductResData;
  checkHandler: (isCheck: boolean, currentItem: ICheckedItem) => void;
  checkedItems: ICheckedItem[];
  selectedCnt?: number;
  isCart?: boolean;
  lastItemRef?: (node?: Element | null | undefined) => void;
}

interface IProductListItemWrapper extends IProductListItem {
  children: React.ReactNode;
  gapSize: string;
}

const ProductListItemContext = createContext<IProductListItem>({
  item: {
    productThumbnail: "",
    productImage: [],
    productName: "",
    productCategory: "",
    productPrice: 0,
    productQuantity: 0,
    productDescription: "",
    sellerId: "",
    createdAt: "",
    updatedAt: "",
    id: "",
  },
  checkHandler: () => {},
  checkedItems: [],
});

const useProductListItem = () => useContext(ProductListItemContext);

const Root = ({
  item,
  children,
  checkHandler,
  checkedItems,
  selectedCnt,
  isCart,
  lastItemRef,
  gapSize,
}: IProductListItemWrapper) => {
  const value = { item, checkHandler, checkedItems, selectedCnt, isCart };
  return (
    <ProductListItemContext.Provider value={value}>
      <div className={`flex py-2 gap-${gapSize}`} ref={lastItemRef}>
        {children}
      </div>
    </ProductListItemContext.Provider>
  );
};

const CheckBox = () => {
  const { checkHandler, selectedCnt, item, checkedItems } =
    useProductListItem();

  return (
    <Checkbox
      data-testid="checkbox"
      onCheckedChange={(checked) => {
        checkHandler(
          checked as boolean,
          selectedCnt
            ? { itemId: item.id, itemCount: selectedCnt }
            : { itemId: item.id }
        );
      }}
      checked={checkedItems.map((el) => el.itemId).includes(item.id)}
    />
  );
};

const Image = ({ size }: { size: string }) => {
  const { item } = useProductListItem();
  return (
    <div className={`w-${size} aspect-square`}>
      <img
        src={item.productThumbnail}
        className="object-cover w-full h-full rounded-sm"
      />
    </div>
  );
};

const Name = ({ ...props }) => {
  const { item } = useProductListItem();

  return <span {...props}>{item.productName}</span>;
};

const Price = ({ ...props }) => {
  const { item } = useProductListItem();

  return <span {...props}>{convertPriceUnit(item.productPrice)}원</span>;
};

const LeftQuantity = ({ ...props }) => {
  const { item } = useProductListItem();
  return <p {...props}>남은수량: {item.productQuantity}개</p>;
};

export default {
  Root: memo(Root),
  CheckBox: memo(CheckBox),
  Image: memo(Image),
  Name: memo(Name),
  Price: memo(Price),
  LeftQuantity: memo(LeftQuantity),
};
