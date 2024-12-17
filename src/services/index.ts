import { useQuery } from "@tanstack/react-query";

const createService = <T>({
  fetcher,
  queryKey,
}: {
  fetcher: () => Promise<T>;
  queryKey: string[];
}) => {
  const hook = () => useQuery<T>({ queryKey, queryFn: fetcher });
  return [hook, fetcher];
};

export default createService;
export * from "./images";
