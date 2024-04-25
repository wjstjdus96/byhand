import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getProducts } from "../api/product";

interface IUseFilteredResults {
  keyword: string;
  category: string;
  sort: string;
}

export const useFilteredResults = ({
  keyword,
  category,
  sort,
}: IUseFilteredResults) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["products", category],
    queryFn: () => getProducts({ keyword, category, sort }),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  useEffect(() => {
    refetch();
  }, [keyword, category, sort]);

  return { data };
};
