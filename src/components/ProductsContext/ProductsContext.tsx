import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
} from "react";
import items, { IItem } from "data";
import { BrowserRouter } from "react-router-dom";

type DispatchIItemArrayI = Dispatch<SetStateAction<IItem[]>>;

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

interface ChildrenI {
  children: ReactNode;
}

const ProductContext = createContext<IProducts | null>(null);

export const ProductProvider = ({ children }: ChildrenI) => {
  const [products, setProducts] = useState(items);
  const [productsInCart, setProductsInCart] = useState<IItem[]>([]);
  const [filteredProducts, setFilteredProducts] = useState(items);
  const [searchedProducts, setSearchedProducts] = useState(items);

  return (
    <BrowserRouter>
      <ProductContext.Provider
        value={{
          products,
          setProducts,
          productsInCart,
          setProductsInCart,
          filteredProducts,
          setFilteredProducts,
          searchedProducts,
          setSearchedProducts,
        }}
      >
        {children}
      </ProductContext.Provider>
    </BrowserRouter>
  );
};

export const useProducts = () => {
  const productsContext = useContext(ProductContext);

  if (!productsContext) {
    throw new Error("useProducts must be use inside RouteProvider!");
  }

  return productsContext;
};

export default ProductContext;
