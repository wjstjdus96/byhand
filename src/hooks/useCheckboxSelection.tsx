import { useState } from "react";

export interface ICheckedItem {
  itemId: string;
  itemCount?: number;
}

interface IUseCheckboxSelection {
  allItems: ICheckedItem[];
}

export const useCheckboxSelection = ({ allItems }: IUseCheckboxSelection) => {
  const [checkedItems, setCheckedItems] = useState<ICheckedItem[]>([]);

  const handleSingleCheck = (isCheck: boolean, currentItem: ICheckedItem) => {
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

  const handleInitItems = () => {
    setCheckedItems([]);
  };

  return {
    checkedItems,
    handleSingleCheck,
    handleAllCheck,
    handleInitItems,
  };
};
