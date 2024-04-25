import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useCategoryType = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get("category");

  const setCategoryParams = (selected: string) => {
    if (selected == "total") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", selected);
    }
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (currentCategory) setSelectedCategory(currentCategory);
    else setSelectedCategory("total");
  }, [currentCategory]);

  return { selectedCategory, setCategoryParams };
};
