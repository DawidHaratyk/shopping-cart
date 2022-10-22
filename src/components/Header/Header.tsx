import { useProducts } from "components/ProductsContext/ProductsContext";
import SearchInput from "components/SearchInput/SearchInput";
import React, { useState } from "react";
import CartPreview from "../CartPreview/CartPreview";

const Header = () => {
  const { productsInCart } = useProducts();
  
  const [isCartPreviewOpen, setIsCartPreviewOpen] = useState(false);

  const handleToggleCartPreviewVisibility = () =>
    setIsCartPreviewOpen((prevState) => !prevState);

  return (
    <div className="header">
      <h3 className="header__headline">Shopping Cart</h3>
      <SearchInput />
      <div className="header__cart" onClick={handleToggleCartPreviewVisibility}>
        <i className="fas fa-shopping-cart header__cart-icon"></i>
        <span className="header__cart-number">{productsInCart.length}</span>
        <i className="fas fa-sort-down header__cart-icon"></i>
        {isCartPreviewOpen && <CartPreview />}
      </div>
    </div>
  );
};

export default Header;
