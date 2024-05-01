import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import { getSellerProducts } from "../../api/product";
import { IProductRegisterReqData } from "../../types/product";
import { getSessionItem } from "../../utils/handleSession";

export const useSellerProducts = () => {
  const uid = getSessionItem("userId");
  const { ref, inView } = useInView();
  const {
    data: querySnap,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["sellProduct", uid],
    queryFn: ({ pageParam }: { pageParam: any }) =>
      getSellerProducts(uid!, 20, pageParam),
    initialPageParam: null,
    getNextPageParam: (querySnapshot) => {
      if (querySnapshot.size < 10) return null;
      else return querySnapshot.docs[querySnapshot.docs.length - 1];
    },
    refetchOnWindowFocus: false,
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

  return { ref, products, isFetchingNextPage, isLoading };
};
