import { useProducts } from "components/ProductsContext/ProductsContext";
import React from "react";

const ProductsTotalCost = () => {
  const { productsInCart } = useProducts();

  const totalCost = productsInCart.reduce((total, productInCart) => {
    const calculatedPriceForProduct =
      productInCart.price * productInCart.amountInCart;

    return total + calculatedPriceForProduct;
  }, 0);

  const allOrderedItems = productsInCart.reduce((total, productInCart) => {
    return total + productInCart.amountInCart;
  }, 0);

  return (
    <div className="products-total">
      <p className="products-total__text">
        Amount of ordered items: {allOrderedItems}
      </p>
      <span className="products-total__cost">Total: ${totalCost}</span>
      <button
        className="products-total__btn"
        onClick={() => alert(`You have ordered ${allOrderedItems} items `)}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default ProductsTotalCost;
