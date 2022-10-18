import { useProducts } from "components/ProductsContext/ProductsContext";
import React, { useState, useEffect } from "react";

const SearchInput = () => {
  const { setSearchedProducts, filteredProducts, products } = useProducts();

  const [searchValue, setSearchValue] = useState("");

  const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    setSearchedProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(searchValue)
      )
    );
  }, [searchValue]);

  return (
    <input
      type="text"
      className="header__input"
      placeholder="Search a product..."
      value={searchValue}
      onChange={(e) => handleSearchValueChange(e)}
    />
  );
};

export default SearchInput;
