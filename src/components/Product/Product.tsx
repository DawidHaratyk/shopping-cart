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
  // const [isProductInCart, setIsProductInCart] = useState(false);
  const { products, setProducts } = useProducts();

  const isCurrentProductInCart = products[index].isProductInCart;

  const buttonClasses = isCurrentProductInCart
    ? "product__btn product__btn-red"
    : "product__btn";
  const buttonTextContent = isCurrentProductInCart
    ? "Remove from Cart"
    : "Add to Cart";

  const handleAddOrRemoveItemFromTheCart = () => {
    setProducts((oldProducts) => [
      ...oldProducts,
      {
        ...oldProducts[index],
        isProductInCart: !oldProducts[index].isProductInCart,
      },
    ]);

    // if (!isCurrentProductInCart) {
    //   setProductsInCart((prevState) => [
    //     ...prevState,
    //     {
    //       name: name,
    //       price: price,
    //       type: type,
    //       image: image,
    //       stars: stars.length,
    //     },
    //   ]);
    // } else {
    //   const handleDeleteItem = () => {
    //     products.map((item, key) => {
    //       if (name === item.name) {
    //         products.splice(key, 1);
    //         setProductsInCart((prevState) => [...prevState]);
    //       }
    //     });
    //   };
    //   handleDeleteItem();
    // }
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
