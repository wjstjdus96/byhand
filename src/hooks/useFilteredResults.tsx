import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useEffect, useMemo } from "react";
import { getProducts } from "../api/product";
import { useInView } from "react-intersection-observer";

interface IUseFilteredResults {
  keyword: string;
  category: string;
  sort: string;
  limitNum: number;
}

export const useFilteredResults = ({
  keyword,
  category,
  sort,
  limitNum,
}: IUseFilteredResults) => {
  //   const { data, isLoading, error, refetch } = useQuery({
  //     queryKey: ["products", category],
  //     queryFn: () => getProducts({ keyword, category, sort }),
  //     refetchOnWindowFocus: false,
  //     staleTime: Infinity,
  //   });

  const { ref, inView } = useInView();
  const {
    data: querySnap,
    fetchNextPage,
    isFetchingNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({ pageParam }: { pageParam: any }) =>
      getProducts({
        keyword,
        category,
        sort,
        pageParam,
        limitNum,
        isInfiniteScroll: true,
      }),
    initialPageParam: null,
    getNextPageParam: (querySnapShot) => {
      if (querySnapShot.size < limitNum) return null;
      else return querySnapShot.docs[querySnapShot.docs.length - 1];
    },
    refetchOnWindowFocus: false,
  });

  const products = useMemo(() => {
    if (querySnap) {
      return querySnap.pages.flatMap((page) =>
        page.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    }
  }, [querySnap]);

  useEffect(() => {
    refetch();
  }, [keyword, category, sort]);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
      console.log("으아");
    }
  }, [inView]);

  return { products, ref };
};
