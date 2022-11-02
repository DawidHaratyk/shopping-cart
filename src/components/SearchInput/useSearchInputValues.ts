// import { useProducts } from "components/ProductsContext/ProductsContext";
import { useEffect, useState } from "react";

export const useSearchInputValues = () => {
  // const { setSearchedProducts, products } = useProducts();

  const [searchValue, setSearchValue] = useState("");

  const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  // useEffect(() => {
  //   setSearchedProducts(
  //     products.filter((product) =>
  //       product.name.toLowerCase().includes(searchValue.toLowerCase())
  //     )
  //   );
  // }, [searchValue]);

  return { handleSearchValueChange, searchValue };
};
