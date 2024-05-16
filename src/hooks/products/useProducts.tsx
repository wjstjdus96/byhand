import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import { getProducts } from "../../api/product";

interface IUseProducts {
  keyword: string;
  category: string;
  sort: string;
}

export const useProducts = ({ keyword, category, sort }: IUseProducts) => {
  const LIMIT_NUM = 18;
  const { ref, inView } = useInView();
  const {
    data: querySnap,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["products", category, keyword, sort],
    queryFn: ({ pageParam }: { pageParam: any }) =>
      getProducts({
        keyword,
        category,
        sort,
        pageParam,
        limitNum: LIMIT_NUM,
        isInfiniteScroll: true,
      }),
    initialPageParam: null,

    getNextPageParam: (querySnapShot: any) => {
      if (querySnapShot?.size < LIMIT_NUM) return null;
      else return querySnapShot?.docs[querySnapShot.docs.length - 1];
    },
    refetchOnWindowFocus: false,
  });

  const products = useMemo(() => {
    if (querySnap) {
      return querySnap.pages.flatMap((page: any) =>
        page!.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))
      );
    }
  }, [querySnap]);

  useEffect(() => {
    if (inView && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, isFetchingNextPage]);

  return { products, ref, isFetchingNextPage, isLoading };
};
