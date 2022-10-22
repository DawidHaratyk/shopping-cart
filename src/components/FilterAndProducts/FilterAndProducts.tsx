import Header from "components/Header/Header";
import React, { useState } from "react";
import Products from "../Products/Products";
import ProductsFilter from "../ProductsFilter/ProductsFilter";

const FilterAndProducts = () => {
  const [filters, setFilters] = useState({
    price: "default",
    clothesType: "everything",
  });

  return (
    <>
      <Header />
      <div className="filter-and-products">
        <ProductsFilter filters={filters} setFilters={setFilters} />
        <Products filters={filters} />
      </div>
    </>
  );
};

export default FilterAndProducts;
