import React, { useEffect, useState } from "react";
import { useProducts } from "components/ProductsContext/ProductsContext";

interface IProduct {
  name: string;
  price: number;
  type: string;
  image: string;
  stars: JSX.Element[];
  index: number;
}

const Product = ({ name, price, type, image, stars, index }: IProduct) => {
  const { products, setProducts, productsInCart, setProductsInCart } =
    useProducts();

  const isCurrentProductInCart = products[index].isProductInCart;

  const buttonClasses = isCurrentProductInCart
    ? "product__btn product__btn-red"
    : "product__btn";
  const buttonTextContent = isCurrentProductInCart
    ? "Remove from Cart"
    : "Add to Cart";

  const handleAddOrRemoveItemFromTheCart = () => {
    // is it the best way to change one value in array of objects?
    products[index].isProductInCart = !products[index].isProductInCart;
    setProducts((oldProducts) => [...oldProducts]);

    if (!isCurrentProductInCart) {
      console.log(products[index]);

      setProductsInCart((oldProductsInCart) => [
        ...oldProductsInCart,
        products[index],
      ]);
    } else {
      const productInCartIndexToRemove = productsInCart.findIndex(
        (productInCart) => productInCart.name === name
      );

      productsInCart.splice(productInCartIndexToRemove, 1);

      setProductsInCart((oldProductsInCart) => [...oldProductsInCart]);
    }
  };

  return (
    <div className="product">
      <img src={image} alt={name} className="product__img" />
      <h5 className="product__name">{name}</h5>
      <span className="product__span">${price}</span>
      {stars}
      <button
        className={buttonClasses}
        onClick={handleAddOrRemoveItemFromTheCart}
      >
        {buttonTextContent}
      </button>
    </div>
  );
};

export default Product;
