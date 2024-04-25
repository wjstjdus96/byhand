import { useEffect } from "react";
import { CATEGORY_TYPE } from "../../consts/data";

interface ICategorySelector {
  selectedCategory: string;
  setCategoryParams: (selected: string) => void;
}

const CategorySelector = ({
  selectedCategory,
  setCategoryParams,
}: ICategorySelector) => {
  const TOTAL_CATEGORY = [{ value: "total", name: "전체" }, ...CATEGORY_TYPE];

  useEffect(() => {});

  return (
    <div className="flex gap-6 my-5">
      {TOTAL_CATEGORY.map((item) => (
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
