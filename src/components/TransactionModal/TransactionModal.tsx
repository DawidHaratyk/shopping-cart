import { useProductsTotalCostValues } from "components/ProductsTotalCost/useProductsTotalCostValues";

interface TransactionModalI {
  setIsOrderMade: React.Dispatch<React.SetStateAction<boolean>>;
  handleGoBackToPreviousPage: () => void;
}

function TransactionModal({
  setIsOrderMade,
  handleGoBackToPreviousPage,
}: TransactionModalI) {
  const { allOrderedItems } = useProductsTotalCostValues();

  const handleCloseModal = () => {
    setIsOrderMade(false);
  };

  return (
    <div className="modal">
      <div className="modal__content">
        <p className="modal__content-text">
          You have ordered {allOrderedItems} items
        </p>
        <button
          className="modal__content-btn"
          onClick={handleGoBackToPreviousPage}
        >
          Go shopping again!
        </button>
        <div className="modal__content-btn-close" onClick={handleCloseModal}>
          x
        </div>
      </div>
    </div>
  );
}

export default TransactionModal;
