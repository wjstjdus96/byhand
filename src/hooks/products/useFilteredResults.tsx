import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import { getProducts } from "../../api/product";

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
  const { ref, inView } = useInView();
  const {
    data: querySnap,
    fetchNextPage,
    isFetchingNextPage,
    refetch,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["products", category, keyword, sort],
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
      if (querySnapShot?.size < limitNum) return null;
      else return querySnapShot?.docs[querySnapShot.docs.length - 1];
    },
    refetchOnWindowFocus: false,
  });

  const products = useMemo(() => {
    if (querySnap) {
      return querySnap.pages.flatMap((page) =>
        page!.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    }
  }, [querySnap]);

  useEffect(() => {
    refetch();
  }, [keyword, category, sort]);

  useEffect(() => {
    if (inView && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, isFetchingNextPage]);

  return { products, ref, isFetchingNextPage, isLoading };
};
