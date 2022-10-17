import { createContext, useContext, Dispatch, SetStateAction } from "react";
import { IItem } from "data";

interface IProducts {
  products: IItem[];
  setProducts: Dispatch<SetStateAction<IItem[]>>;
  productsInCart: IItem[];
  setProductsInCart: Dispatch<SetStateAction<IItem[]>>;
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
