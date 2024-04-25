import { queryOptions, useQueries, useQuery } from "@tanstack/react-query";
import { getProducts, temp_getProducts } from "../api/product";

interface IUseGetCollection {
  category: string;
  limitNum?: number;
}

export const useGetCollection = ({
  category,
  limitNum = 6,
}: IUseGetCollection) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["collection", category],
    queryFn: () => temp_getProducts({ category: category, limitNum: limitNum }),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
  return { data, isLoading };

  // const quries = useQueries(
  //   categories.map((category) => ({
  //     queries: [
  //       {
  //         queryKey: ["collection", category],
  //         queryFn: () =>
  //           temp_getProducts({ category: category, limitNum: limitNum }),
  //         staleTime: Infinity,
  //       },
  //     ],
  //   }))
  // );

  // return { quries };
};
