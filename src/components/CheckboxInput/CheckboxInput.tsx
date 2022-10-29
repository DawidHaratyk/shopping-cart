import React from "react";

interface CheckboxInputI {
  handleFiltersChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    price: string,
    id: number
  ) => void;
  isChecked: boolean;
  priceOrder: string;
  id: number;
}

function CheckboxInput({
  handleFiltersChange,
  isChecked,
  priceOrder,
  id,
}: CheckboxInputI) {
  
  return (
    <label htmlFor="price" className="filter__label">
      <input
        type="checkbox"
        checked={isChecked}
        className="filter__input"
        name="price"
        onChange={(e) => handleFiltersChange(e, priceOrder, id)}
      />
      {priceOrder}
    </label>
  );
}

export default CheckboxInput;
