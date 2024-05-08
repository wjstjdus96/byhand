import { useQueryClient } from "@tanstack/react-query";

interface IUsePrefetchData {
  queryKey: string[];
  queryFn: any;
}

export const usePrefetchData = ({ queryKey, queryFn }: IUsePrefetchData) => {
  const queryClient = useQueryClient();
  const handlePrefetchData = async () => {
    await queryClient.prefetchQuery({ queryKey, queryFn });
  };

  return { handlePrefetchData };
};
