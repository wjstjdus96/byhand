import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { getSellerFirstDocs, getSellerNextDocs } from "../api/product";
import { useEffect, useMemo } from "react";

interface IUseInfiniteScroll {
  uid: string;
}

export const useInfiniteScroll = ({ uid }: IUseInfiniteScroll) => {
  const { ref, inView } = useInView();
  const {
    data: querySnap,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["sellProduct", uid],
    queryFn: ({ pageParam }: { pageParam: any }) => {
      return pageParam
        ? getSellerNextDocs(uid, pageParam)
        : getSellerFirstDocs(uid);
    },
    initialPageParam: null,
    getNextPageParam: (querySnapshot) => {
      if (querySnapshot.size < 10) return null;
      else return querySnapshot.docs[querySnapshot.docs.length - 1];
    },
  });

  const products = useMemo(() => {
    if (querySnap) {
      return querySnap.pages.flatMap((page) =>
        page.docs.map((doc) => doc.data())
      );
    }
  }, [querySnap]);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return { ref, products, isFetchingNextPage };
};
