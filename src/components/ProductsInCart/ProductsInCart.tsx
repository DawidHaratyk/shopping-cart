import React, { useContext } from "react";
import { IoTrashBinSharp } from "react-icons/io5";
import ProductContext from "../ProductsContext/ProductsContext";

const ProductsInCart: React.FC = () => {
  const { products } = useContext(ProductContext);

  const allProductsInCart = products.map((product) => {
    const { name, image, price, stars, isProductInCart } = product;

    if (!isProductInCart) return null;

    return (
      <div className="product">
        <img src={image} alt={name} className="product__img" />
        <h5 className="product__name">{name}</h5>
        <span className="product__span">${price}</span>
        <div className="product__stars">{stars}</div>
        <select name="amount" className="product__select">
          <option value="1" className="product__select-option">
            1
          </option>
          <option value="2" className="product__select-option">
            2
          </option>
          <option value="3" className="product__select-option">
            3
          </option>
        </select>
        <IoTrashBinSharp className="product__delete" />
      </div>
    );
  });

  return <div className="products-in-cart">{allProductsInCart}</div>;
};

export default ProductsInCart;
