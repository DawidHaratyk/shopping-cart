import React, { useState } from "react";
import ProductsInCart from "../ProductsInCart/ProductsInCart";
import ProductsTotalCost from "../ProductsTotalCost/ProductsTotalCost";
import leftArrow from "../../images/left-arrow.png";
import { useNavigate } from "react-router-dom";
import TransactionModal from "components/TransactionModal/TransactionModal";

const UserCart = () => {
  const [isOrderMade, setIsOrderMade] = useState(false);

  const navigate = useNavigate();

  const handleGoBackToPreviousPage = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="header">
        <img
          src={leftArrow}
          alt="left-arrow"
          className="header__arrow"
          onClick={handleGoBackToPreviousPage}
        />
        <h3 className="header__headline">Shopping Cart</h3>
      </div>
      <div className="user-cart">
        <ProductsInCart />
        <ProductsTotalCost setIsOrderMade={setIsOrderMade} />
      </div>
      {isOrderMade && (
        <TransactionModal
          setIsOrderMade={setIsOrderMade}
          handleGoBackToPreviousPage={handleGoBackToPreviousPage}
        />
      )}
    </>
  );
};

export default UserCart;
