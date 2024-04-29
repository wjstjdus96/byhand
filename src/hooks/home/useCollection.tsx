import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../api/product";

interface IUseCollection {
  category: string;
  limitNum?: number;
}

export const useCollection = ({ category, limitNum = 6 }: IUseCollection) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["collection", category],
    queryFn: () =>
      getProducts({
        category: category,
        limitNum: limitNum,
        sort: "createdAt-desc",
      }),
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, error };
};
