import React from "react";
import { useProducts } from "components/ProductsContext/ProductsContext";

interface IProduct {
  name: string;
  price: number;
  type: string;
  image: string;
  isProductInCart: boolean;
  stars: JSX.Element[];
  index: number;
}

const Product = ({
  name,
  price,
  type,
  image,
  isProductInCart,
  stars,
  index,
}: IProduct) => {
  const { products, setProducts, productsInCart, setProductsInCart } =
    useProducts();

  const currentProductIndex = index - 1;

  const buttonClasses = isProductInCart
    ? "product__btn product__btn-red"
    : "product__btn";
  const buttonTextContent = isProductInCart
    ? "Remove from Cart"
    : "Add to Cart";

  const handleAddOrRemoveItemFromTheCart = () => {
    console.log(products[currentProductIndex]);

    // is it the best way to change one value in array of objects?
    products[currentProductIndex].isProductInCart =
      !products[currentProductIndex].isProductInCart;
    setProducts((oldProducts) => [...oldProducts]);

    if (!isProductInCart) {
      setProductsInCart((oldProductsInCart) => [
        ...oldProductsInCart,
        products[currentProductIndex],
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
