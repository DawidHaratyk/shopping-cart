import { useQuery } from "@tanstack/react-query";
import { getProducts } from "utils/getData";

export const useStock = () => {
  const { data, isError, isLoading } = useQuery(["products"], getProducts);

  return {
    products: data,
    isError,
    isLoading,
  };
};
