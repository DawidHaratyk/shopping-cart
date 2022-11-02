import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient } from "App";
import { getFilteredProducts } from "utils/getData";

export const useFilteredProducts = () => {
  const { data, isError, isLoading } = useQuery(
    ["filtered-products"],
    getFilteredProducts
  );

  const mutation = useMutation(
    async (filteredProducts) => {
      const response = await fetch("localhost:8000/filteredProducts", {
        method: "PATCH",
        body: JSON.stringify(filteredProducts),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      const newFilteredProducts = await response.json();
      return newFilteredProducts;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["filtered-products"]);
      },
    }
  );

  return {
    products: data,
    isError,
    isLoading,
    mutation,
  };
};
