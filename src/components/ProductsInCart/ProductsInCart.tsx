import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IoTrashBinSharp } from "react-icons/io5";
import { useProducts } from "../ProductsContext/ProductsContext";

const ProductsInCart = () => {
  const { productsInCart } = useProducts();

  const allProductsInCart = productsInCart.map((productInCart) => {
    const { name, image, price, stars, numberOfProducts } = productInCart;

    // make a custom hook for starsList
    const starsList = [1, 2, 3, 4, 5].map((arrayElement, index) => {
      if (stars - 1 >= index) {
        return <AiFillStar style={{ color: "black" }} key={arrayElement} />;
      } else {
        return <AiOutlineStar style={{ color: "black" }} key={arrayElement} />;
      }
    });

    // otypuj options
    const options = Array(numberOfProducts)
      .fill(0)
      .map((_, key) => (
        <option className="product__select-option">{key + 1}</option>
      ));

    return (
      <div className="product">
        <div className="product__img-container">
          <img src={image} alt={name} className="product__img" />
        </div>
        <h5 className="product__name">{name}</h5>
        <span className="product__span">${price}</span>
        <div className="product__stars">{starsList}</div>
        <select name="amount" className="product__select">
          {options}
        </select>
        <IoTrashBinSharp className="product__delete" />
      </div>
    );
  });

  return <div className="products-in-cart">{allProductsInCart}</div>;
};

export default ProductsInCart;
