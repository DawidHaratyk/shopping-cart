import { useCartProducts } from "hooks/useCartProducts";
import React from "react";
import { Link } from "react-router-dom";

// interface ICart {
//   setIsCartPreviewOpen: (value: boolean) => void;
// }

const CartPreview = () => {
  const cartProducts = useCartProducts();

  const showCartStatusBySuitableElement =
    cartProducts.length > 0 ? (
      <Link to="/cart">
        <button className="cart-preview__btn">Go To Cart</button>
      </Link>
    ) : (
      <p className="cart-preview__text">Cart is Empty!</p>
    );

  return (
    <div className="cart-preview">
      {cartProducts}
      {showCartStatusBySuitableElement}
    </div>
  );
};

export default CartPreview;
