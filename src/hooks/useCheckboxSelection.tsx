import { useState } from "react";

export interface ICheckedCartItem {
  itemId: string;
  itemCount?: number;
}

interface IUseCheckboxSelection {
  allItems: ICheckedCartItem[];
}

export const useCheckboxSelection = ({ allItems }: IUseCheckboxSelection) => {
  const [checkedItems, setCheckedItems] = useState<ICheckedCartItem[]>([]);

  const handleSingleCheck = (
    isCheck: boolean,
    currentItem: ICheckedCartItem
  ) => {
    if (isCheck) {
      setCheckedItems((prev) => [...prev, currentItem]);
    } else {
      setCheckedItems(
        checkedItems.filter((item) => item.itemId != currentItem.itemId)
      );
    }
  };

  const handleAllCheck = (isCheck: boolean) => {
    if (isCheck) {
      setCheckedItems(allItems);
    } else {
      setCheckedItems([]);
    }
  };

  return {
    checkedItems,
    handleSingleCheck,
    handleAllCheck,
  };
};
