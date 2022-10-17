import React from "react";
import Product from "../Product/Product";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IFilters } from "components/FilterAndProducts/FilterAndProducts";
import { useProducts } from "components/ProductsContext/ProductsContext";

interface IFiltersState {
  filters: IFilters;
}

const Products = ({ filters }: IFiltersState) => {
  const { products } = useProducts();

  const sortedProducts = () => {
    if (filters.price !== "default") {
      return products.sort(
        (currentProduct, nextProduct) =>
          (filters.price === "ascending" ? currentProduct : nextProduct).price -
          (filters.price === "ascending" ? nextProduct : currentProduct).price
      );
    } else return products;
  };

  const newSortedProducts = sortedProducts();

  const productsList = newSortedProducts.map((item, key) => {
    const { name, price, type, image } = item;

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
        stars={starsList}
        index={key}
        key={key}
      />
    );
  });

  return <div className="products">{productsList}</div>;
};

export default Products;
