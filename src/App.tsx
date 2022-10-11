import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilterAndProducts from "./components/FilterAndProducts/FilterAndProducts";
import Header from "./components/Header/Header";
import UserCart from "./components/UserCart/UserCart";
import ProductContext from "./components/ProductsContext/ProductsContext";
import items from "data";

const App = () => {
  const [products, setProducts] = useState(items);

  return (
    <BrowserRouter>
      <ProductContext.Provider value={{ products, setProducts }}>
        <Header />
        <Routes>
          <Route path="/" element={<FilterAndProducts />} />
          <Route path="/cart" element={<UserCart />} />
        </Routes>
      </ProductContext.Provider>
    </BrowserRouter>
  );
};

export default App;
