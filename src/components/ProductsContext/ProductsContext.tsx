import { createContext, useContext, Dispatch, SetStateAction } from "react";
import { IItem } from "data";

interface IProducts {
  products: IItem[];
  setProducts: Dispatch<SetStateAction<IItem[]>>;
}

const ProductContext = createContext<IProducts>({
  products: [],
  setProducts: () => {},
});

export const useProducts = () => useContext(ProductContext);

export default ProductContext;
