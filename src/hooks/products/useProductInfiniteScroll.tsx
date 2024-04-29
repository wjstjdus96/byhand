import { useEffect } from "react";
import { getProducts } from "../../api/product";
import { useInfiniteScroll } from "../useInfiniteScroll";

interface IUseProductInfiniteScroll {
  keyword: string;
  category: string;
  sort: string;
  limitNum: number;
}

export const useProductInfiniteScroll = ({
  keyword,
  category,
  sort,
  limitNum,
}: IUseProductInfiniteScroll) => {
  const queryFn = (pageParam: any) => {
    getProducts({
      keyword,
      category,
      sort,
      limitNum,
      pageParam,
      isInfiniteScroll: true,
    });
  };
  const { ref, products, refetch } = useInfiniteScroll({
    queryKey: ["products", keyword],
    queryFn,
    limitNum,
  });

  useEffect(() => {
    refetch();
  }, [keyword, category, sort]);

  return { ref, products };
};
