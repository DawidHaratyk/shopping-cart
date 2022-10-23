import React, { useEffect } from "react";
import { IFilters } from "types/index";
import { useProducts } from "components/ProductsContext/ProductsContext";
import { IItem } from "data";
import { useProductsValues } from "./useProductsValues";

interface IFiltersState {
  filters: IFilters;
}

const Products = ({ filters }: IFiltersState) => {
  const { setFilteredProducts, searchedProducts } = useProducts();

  const { sortedProducts, productsList } = useProductsValues(filters);

  useEffect(() => {
    let sortedAndSearchedProducts: IItem[] = [];

    sortedProducts.filter((sortedProduct) => {
      searchedProducts.forEach((searchedProduct) => {
        if (searchedProduct.name === sortedProduct.name) {
          sortedAndSearchedProducts.push(sortedProduct);
        }
      });
    });

    setFilteredProducts(sortedAndSearchedProducts);
  }, [searchedProducts, sortedProducts]);

  return <div className="products">{productsList}</div>;
};

export default Products;
