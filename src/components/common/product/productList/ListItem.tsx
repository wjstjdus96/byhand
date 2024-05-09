import * as React from "react";
import { IProductResData } from "../../../../types/product";
import { ICheckedItem } from "../../../../hooks/useCheckboxSelection";
import { Checkbox } from "@radix-ui/react-checkbox";

type ProductListItemContextProps = {
  item: IProductResData;
  checkHandler: (isCheck: boolean, currentItem: ICheckedItem) => void;
  checkedItems: ICheckedItem[];
  selectedCnt?: number;
  isCart?: boolean;
};

type ProductListItemProps = ProductListItemContextProps &
  React.PropsWithChildren<{}>;

const ProductListItemContext = React.createContext<ProductListItemProps>({
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

const ProductListItemWrapper = ({
  item,
  checkHandler,
  checkedItems,
  selectedCnt,
  children,
  ...props
}: ProductListItemProps) => {
  const value = {
    item,
    checkHandler,
    checkedItems,
    selectedCnt,
  };
  return (
    <ProductListItemContext.Provider value={value} {...props}>
      {children}
    </ProductListItemContext.Provider>
  );
};

const useProductListItemContext = () => {
  const context = React.useContext(ProductListItemContext);
  return context;
};

const CheckBox = () => {
  const { checkHandler, selectedCnt, item, checkedItems } =
    useProductListItemContext();
  return (
    <Checkbox
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

const ProductImage = ({ size }: { size: number }) => {
  const { item } = useProductListItemContext();

  return (
    <div className={`w-${size} aspect-square`}>
      <img
        src={item.productThumbnail}
        className="object-cover w-full h-full rounded-sm"
      />
    </div>
  );
};

const ProductName = ({ ...props }) => {
  const { item } = useProductListItemContext();
  return <span {...props}>{item.productName}</span>;
};
