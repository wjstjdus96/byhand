import { useState } from "react";
import { CATEGORY_TYPE } from "../../consts/data";

const CategorySelector = () => {
  const [selected, setSelected] = useState("living");

  return (
    <div className="flex gap-6 my-5">
      {CATEGORY_TYPE.map((item) => (
        <span
          className={`text-sm font-semibold py-1 px-2 rounded-lg cursor-pointer ${
            item.value == selected
              ? "bg-[#312fd0] bg-opacity-10 text-[#312fd0]"
              : "bg-transparent"
          }`}
        >
          {item.name}
        </span>
      ))}
    </div>
  );
};

export default CategorySelector;
