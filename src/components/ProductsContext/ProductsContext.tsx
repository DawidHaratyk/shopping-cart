import { createContext, useContext, Dispatch, SetStateAction } from "react";
import { IItem } from "data";

type DispatchIItemArrayI = Dispatch<SetStateAction<IItem[]>>

interface IProducts {
  products: IItem[];
  setProducts: DispatchIItemArrayI;
  productsInCart: IItem[];
  setProductsInCart: DispatchIItemArrayI;
  filteredProducts: IItem[];
  setFilteredProducts: DispatchIItemArrayI;
  searchedProducts: IItem[];
  setSearchedProducts: DispatchIItemArrayI;
}

const ProductContext = createContext<IProducts | null>(null);

export const useProducts = () => {
  const productsContext = useContext(ProductContext);

  if (!productsContext) {
    throw new Error("useProducts must be use inside RouteProvider!");
  }

  return productsContext;
};

export default ProductContext;
