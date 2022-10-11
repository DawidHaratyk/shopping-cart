import React from "react";

const ProductsTotalCost: React.FC = () => {
  return (
    <div className="products-total">
      <p className="products-total__text">Subtotal (2) items</p>
      <span className="products-total__cost">Total: $399</span>
      <button className="products-total__btn">Proceed to Checkout</button>
    </div>
  );
};

export default ProductsTotalCost;
