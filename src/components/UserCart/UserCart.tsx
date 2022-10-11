import React from "react";
import ProductsInCart from "../ProductsInCart/ProductsInCart";
import ProductsTotalCost from "../ProductsTotalCost/ProductsTotalCost";

const UserCart: React.FC = () => {
  return (
    <div className="user-cart">
      <ProductsInCart />
      <ProductsTotalCost />
    </div>
  );
};

export default UserCart;
