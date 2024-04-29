import { useEffect } from "react";
import { CATEGORY_TYPE_INCLUDING_TOTAL } from "../../consts/data";

interface ICategorySelector {
  selectedCategory: string;
  setCategoryParams: (selected: string) => void;
}

const CategorySelector = ({
  selectedCategory,
  setCategoryParams,
}: ICategorySelector) => {
  useEffect(() => {});

  return (
    <div className="flex gap-6 my-5">
      {CATEGORY_TYPE_INCLUDING_TOTAL.map((item) => (
        <span
          className={`text-sm font-semibold py-1 px-2 rounded-lg cursor-pointer ${
            item.value == selectedCategory
              ? "bg-[#312fd0] bg-opacity-10 text-[#312fd0]"
              : "bg-transparent"
          }`}
          onClick={() => setCategoryParams(item.value)}
        >
          {item.name}
        </span>
      ))}
    </div>
  );
};

export default CategorySelector;
