import { IFilters } from "types/index";
import { useProductsValues } from "./useProductsValues";

interface IFiltersState {
  filters: IFilters;
}

const Products = ({ filters }: IFiltersState) => {
  const { productsList, isError, isLoading } = useProductsValues(filters);

  if (isError) return <h3 className="center">Something went wrong...</h3>;

  if (isLoading) return <h3 className="center">Loading...</h3>;

  return <div className="products">{productsList}</div>;
};

export default Products;
