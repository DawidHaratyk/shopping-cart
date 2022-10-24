import { useProductsTotalCostValues } from "./useProductsTotalCostValues";

interface ProductsTotalCostI {
  setIsOrderMade: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductsTotalCost = ({ setIsOrderMade }: ProductsTotalCostI) => {
  const { totalCost, allOrderedItems } = useProductsTotalCostValues();

  return (
    <div className="products-total">
      <p className="products-total__text">
        Amount of ordered items: {allOrderedItems}
      </p>
      <span className="products-total__cost">Total: ${totalCost}</span>
      <button
        className="products-total__btn"
        onClick={() => setIsOrderMade(true)}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default ProductsTotalCost;
