import React from "react";
import Product from "../Product/Product";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IFilters } from "components/FilterAndProducts/FilterAndProducts";
import { useProducts } from "components/ProductsContext/ProductsContext";

interface IFiltersState {
  filters: IFilters;
}

const Products: React.FC<IFiltersState> = ({ filters }) => {
  const { products } = useProducts();

  let numbersArray: number[] = [];

  const productsList = products.map((item, key) => {
    const { name, price, type, image } = item;

    numbersArray.push(price);
    let number = Math.min(...numbersArray);
    console.log(numbersArray.filter((e) => e !== number));

    if (filters.price === "ascending") {
    } else if (filters.price === "descending") {
    }

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
