import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IoTrashBinSharp } from "react-icons/io5";
import { useProducts } from "../ProductsContext/ProductsContext";

const ProductsInCart = () => {
  const { productsInCart, setProductsInCart } = useProducts();

  const allProductsInCart = productsInCart.map((productInCart, key) => {
    const { name, image, price, stars, availableAmount, amountInCart } =
      productInCart;

    // make a custom hook for starsList
    const starsList = [1, 2, 3, 4, 5].map((arrayElement, index) => {
      if (stars - 1 >= index) {
        return <AiFillStar style={{ color: "black" }} key={arrayElement} />;
      } else {
        return <AiOutlineStar style={{ color: "black" }} key={arrayElement} />;
      }
    });

    const availableAmountItems = Array.from(
      { length: availableAmount || 0 },
      (_, key) => (
        <option className="product__select-option" key={key}>
          {key + 1}
        </option>
      )
    );

    const handleChangeProductAmount = (
      e: React.ChangeEvent<HTMLSelectElement>
    ) => {
      productsInCart[key].amountInCart = Number(e.target.value);
      setProductsInCart((prevState) => [...prevState]);
    };

    return (
      <div className="product" key={key}>
        <div className="product__img-container">
          <img src={image} alt={name} className="product__img" />
        </div>
        <h5 className="product__name">{name}</h5>
        <span className="product__span">${price}</span>
        <div className="product__stars">{starsList}</div>
        <select
          name="amount"
          className="product__select"
          value={amountInCart}
          onChange={(e) => handleChangeProductAmount(e)}
        >
          {availableAmountItems}
        </select>
        <IoTrashBinSharp className="product__delete" />
      </div>
    );
  });

  return <div className="products-in-cart">{allProductsInCart}</div>;
};

export default ProductsInCart;
