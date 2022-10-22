import CartPreviewProduct from "components/CartPreviewProduct/CartPreviewProduct";
import { useProducts } from "components/ProductsContext/ProductsContext";
import React from "react";
import { Link } from "react-router-dom";

const CartPreview = () => {
  const { productsInCart } = useProducts();

  const cartHasProducts = productsInCart.length > 0;

  const showCartStatusBySuitableElement =
  cartHasProducts ? (
      <Link to="/cart">
        <button className="cart-preview__btn">Go To Cart</button>
      </Link>
    ) : (
      <p className="cart-preview__text">Cart is Empty!</p>
    );

  return (
    <div className="cart-preview">
      {productsInCart.map((product, key) => (
        <CartPreviewProduct {...product} index={key} key={key} />
      ))}
      {showCartStatusBySuitableElement}
    </div>
  );
};

export default CartPreview;
