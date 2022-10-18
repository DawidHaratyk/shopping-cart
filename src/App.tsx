import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilterAndProducts from "./components/FilterAndProducts/FilterAndProducts";
import UserCart from "./components/UserCart/UserCart";
import ProductContext from "./components/ProductsContext/ProductsContext";
import items, { IItem } from "data";

const App = () => {
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
        <Routes>
          <Route path="/" element={<FilterAndProducts />} />
          <Route path="/cart" element={<UserCart />} />
        </Routes>
      </ProductContext.Provider>
    </BrowserRouter>
  );
};

export default App;
