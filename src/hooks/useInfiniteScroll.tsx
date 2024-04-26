import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import { IProductRegisterReqData, IProductResData } from "../types/product";
import { QueryDocumentSnapshot } from "firebase/firestore";

interface IUseInfiniteScroll {
  queryKey: string[];
  queryFn: any;
  limitNum: number;
}

export const useInfiniteScroll = ({
  queryKey,
  queryFn,
  limitNum,
}: IUseInfiniteScroll) => {
  const { ref, inView } = useInView();
  const {
    data: querySnap,
    fetchNextPage,
    isFetchingNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: queryKey,
    queryFn: ({ pageParam }: { pageParam: any }) => queryFn(pageParam),
    initialPageParam: null,
    getNextPageParam: (querySnapshot) => {
      if (querySnapshot.size < limitNum) return null;
      else return querySnapshot.docs[querySnapshot.docs.length - 1];
    },
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  const products = useMemo(() => {
    if (querySnap) {
      console.log(
        querySnap.pages.flatMap((page) =>
          page.docs.map((doc: QueryDocumentSnapshot<IProductResData>) => ({
            id: doc.id,
            ...(doc.data() as IProductRegisterReqData),
          }))
        )
      );
      return querySnap.pages.flatMap((page) =>
        page.docs.map((doc: QueryDocumentSnapshot<IProductResData>) => ({
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

  return { ref, products, isFetchingNextPage, refetch };
};
