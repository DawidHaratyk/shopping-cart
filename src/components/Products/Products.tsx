import React, { useMemo, useEffect } from "react";
import Product from "../Product/Product";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IFilters } from "components/FilterAndProducts/FilterAndProducts";
import { useProducts } from "components/ProductsContext/ProductsContext";
import { IItem } from "data";

interface IFiltersState {
  filters: IFilters;
}

const Products = ({ filters }: IFiltersState) => {
  const {
    products,
    filteredProducts,
    setFilteredProducts,
    searchedProducts,
    setSearchedProducts,
  } = useProducts();

  const sortedProducts = useMemo(() => {
    const sortedProductByCategory = products.filter((product) =>
      product.type.includes(filters.clothesType)
    );

    if (filters.price !== "default") {
      return sortedProductByCategory.sort(
        (currentProduct, nextProduct) =>
          (filters.price === "ascending" ? currentProduct : nextProduct).price -
          (filters.price === "ascending" ? nextProduct : currentProduct).price
      );
    } else return sortedProductByCategory;
  }, [filters.clothesType, filters.price, products]);

  useEffect(() => {
    let array: IItem[] = [];

    sortedProducts.filter((sortedProduct) => {
      searchedProducts.forEach((searchedProduct) => {
        if (searchedProduct.name === sortedProduct.name) {
          array.push(sortedProduct);
        }
      });
    });

    setFilteredProducts(array);
  }, [searchedProducts, sortedProducts]);

  const productsList = filteredProducts.map((item, key) => {
    const { name, price, type, image, isProductInCart, id } = item;

    const starsList = [1, 2, 3, 4, 5].map((arrayElement, index) => {
      if (item.stars - 1 >= index) {
        return <AiFillStar style={{ color: "black" }} key={arrayElement} />;
      } else {
        return <AiOutlineStar style={{ color: "black" }} key={arrayElement} />;
      }
    });

    return (
      <Product
        name={name}
        price={price}
        type={type}
        image={image}
        isProductInCart={isProductInCart}
        stars={starsList}
        index={id}
        key={key}
      />
    );
  });

  return <div className="products">{productsList}</div>;
};

export default Products;
