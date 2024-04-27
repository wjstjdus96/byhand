import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import { getSellerProducts } from "../../api/product";
import { IProductRegisterReqData } from "../../types/product";

interface IUseSellerInfiniteScroll {
  uid: string;
}

export const useSellerInfiniteScroll = ({ uid }: IUseSellerInfiniteScroll) => {
  const { ref, inView } = useInView();
  const {
    data: querySnap,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["sellProduct", uid],
    queryFn: ({ pageParam }: { pageParam: any }) =>
      getSellerProducts(uid, pageParam),
    initialPageParam: null,
    getNextPageParam: (querySnapshot) => {
      if (querySnapshot.size < 10) return null;
      else return querySnapshot.docs[querySnapshot.docs.length - 1];
    },
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  const products = useMemo(() => {
    if (querySnap) {
      return querySnap.pages.flatMap((page) =>
        page.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as IProductRegisterReqData),
        }))
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
