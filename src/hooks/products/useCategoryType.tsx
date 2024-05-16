import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useCategoryType = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get("category");
  const initialCategory = currentCategory ? currentCategory : "total";
  const [selectedCategory, setSelectedCategory] =
    useState<string>(initialCategory);

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
