import { useProductsTotalCostValues } from "./useProductsTotalCostValues";

const ProductsTotalCost = () => {
  const { totalCost, allOrderedItems } = useProductsTotalCostValues();

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
