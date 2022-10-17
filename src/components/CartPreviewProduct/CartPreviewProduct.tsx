// import { useCartProducts } from "hooks/useCartProducts";
import React from "react";
import { IoTrashBinSharp } from "react-icons/io5";
import { useProducts } from "../ProductsContext/ProductsContext";

interface ICartPreviewProduct {
  name: string;
  price: number;
  image: string;
  index: number;
}

const CartPreviewProduct = ({
  name,
  price,
  image,
  index,
}: ICartPreviewProduct) => {
  const { products, setProducts, productsInCart, setProductsInCart } =
    useProducts();

  const handleDeleteProductFromCart = () => {
    const correctProductIndex = productsInCart[index].id - 1;
    console.log(correctProductIndex);

    // try to do a global reducer

    //change button state
    //there is incorrect index when sorting
    products[correctProductIndex].isProductInCart =
      !products[correctProductIndex].isProductInCart;

    setProducts((oldProducts) => [...oldProducts]);

    // remove correct element from cart
    productsInCart.splice(index, 1);

    setProductsInCart((oldProductsInCart) => [...oldProductsInCart]);
  };

  return (
    <div className="product">
      <img src={image} alt={name} className="product__img" />
      <div className="product__name-container">
        <h5 className="product__name">{name}</h5>
        <span className="product__span">${price}</span>
      </div>
      <IoTrashBinSharp
        className="product__delete"
        onClick={handleDeleteProductFromCart}
      />
    </div>
  );
};

export default CartPreviewProduct;
